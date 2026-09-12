> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentcontact/phonenumber](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentcontact/phonenumber)

# phoneNumber

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A phone number for the contact.

## Declaration

```
DOMString phoneNumber;
```

<a id="Discussion"></a>

## Discussion

Phone numbers do not necessarily follow any standard formats, and are not validated.

Your app should be prepared to handle phone numbers in a variety of formats, for example, with or without a country code or with various use of punctuation.

## See Also

### Contact properties

- [emailAddress](emailaddress.md): An email address for the contact.
- [givenName](givenname.md): The contact’s given name.
- [familyName](familyname.md): The contact’s family name.
- [phoneticGivenName](phoneticgivenname.md): The phonetic spelling of the contact’s given name.
- [phoneticFamilyName](phoneticfamilyname.md): The phonetic spelling of the contact’s family name.
