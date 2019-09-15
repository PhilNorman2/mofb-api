class Location {
  constructor(res) {
    this.id = String(res.location_id);
    this.address1 = res.street_1;
    this.address2 = res.street_2;
    this.zipCode = String(res.zip);
    this.name = res.name;
    this.areaCode = String(res.phone_area_code);
    this.phoneNumber = String(res.phone_number);
    this.phoneExtension = res.phone_extension;
    this.handicapAccessFlag = res.handicap_access;
    this.hours = res.hours;
    this.lat = res.lat;
    this.long = res.long;
  }

  static get(res) {
    const locationList = [];
    res.forEach(r => {
      const t = new Location(r);
      locationList.push(t);
    });
    return locationList;
  }
}

module.exports = Location;
