> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/iptc-dictionary-keys](https://developer.apple.com/documentation/imageio/iptc-dictionary-keys)

# IPTC Dictionary Keys

**Interface languages:** Swift, Objective-C

**Framework:** Image I/O  
**Kind:** API Collection

Metadata keys for International Press Telecommunications Council (IPTC) data.

<a id="overview"></a>

## Overview

IPTC constants are metadata elements of the Information Interchange Model (IIM) used to provide information about images. The IIM was developed by the Newspaper Association of America (NAA) and the IPTC.

## Topics

### Dictionary

- [kCGImagePropertyIPTCDictionary](kcgimagepropertyiptcdictionary.md): A dictionary of key-value pairs for an image that uses International Press Telecommunications Council (IPTC) metadata.

### Image Categorization

- [kCGImagePropertyIPTCUrgency](kcgimagepropertyiptcurgency.md): The urgency level.
- [kCGImagePropertyIPTCSubjectReference](kcgimagepropertyiptcsubjectreference.md): The subject.
- [kCGImagePropertyIPTCCategory](kcgimagepropertyiptccategory.md): The category.
- [kCGImagePropertyIPTCSupplementalCategory](kcgimagepropertyiptcsupplementalcategory.md): A supplemental category.
- [kCGImagePropertyIPTCFixtureIdentifier](kcgimagepropertyiptcfixtureidentifier.md): A fixture identifier.
- [kCGImagePropertyIPTCKeywords](kcgimagepropertyiptckeywords.md): Keywords relevant to the image.
- [kCGImagePropertyIPTCContentLocationCode](kcgimagepropertyiptccontentlocationcode.md): The content location code.
- [kCGImagePropertyIPTCContentLocationName](kcgimagepropertyiptccontentlocationname.md): The content location name.
- [kCGImagePropertyIPTCEditStatus](kcgimagepropertyiptceditstatus.md): The edit status.
- [kCGImagePropertyIPTCEditorialUpdate](kcgimagepropertyiptceditorialupdate.md): An editorial update.
- [kCGImagePropertyIPTCObjectCycle](kcgimagepropertyiptcobjectcycle.md): The editorial cycle (morning, evening, or both) of the image.

### Image Information

- [kCGImagePropertyIPTCImageType](kcgimagepropertyiptcimagetype.md): The image type.
- [kCGImagePropertyIPTCImageOrientation](kcgimagepropertyiptcimageorientation.md): The image orientation (portrait, landscape, or square).
- [kCGImagePropertyIPTCLanguageIdentifier](kcgimagepropertyiptclanguageidentifier.md): The language identifier, a two-letter code defined by ISO 639:1988.
- [kCGImagePropertyIPTCCaptionAbstract](kcgimagepropertyiptccaptionabstract.md): The description of the image.
- [kCGImagePropertyIPTCHeadline](kcgimagepropertyiptcheadline.md): A summary of the contents of the image.
- [kCGImagePropertyIPTCCredit](kcgimagepropertyiptccredit.md): The name of the service that provided the image.
- [kCGImagePropertyIPTCStarRating](kcgimagepropertyiptcstarrating.md): The star rating.
- [kCGImagePropertyIPTCScene](kcgimagepropertyiptcscene.md): The scene codes for the image; a scene code is a six-digit string.

### Copyright

- [kCGImagePropertyIPTCCopyrightNotice](kcgimagepropertyiptccopyrightnotice.md): The copyright notice.
- [kCGImagePropertyIPTCRightsUsageTerms](kcgimagepropertyiptcrightsusageterms.md): The usage rights for the image.

### Release Information

- [kCGImagePropertyIPTCReleaseDate](kcgimagepropertyiptcreleasedate.md): The earliest day on which you can use the image, in the form CCYYMMDD.
- [kCGImagePropertyIPTCReleaseTime](kcgimagepropertyiptcreleasetime.md): The earliest time at which you can use the image, in the form HHMMSS.
- [kCGImagePropertyIPTCExpirationDate](kcgimagepropertyiptcexpirationdate.md): The latest date you can use the image, in the form CCYYMMDD.
- [kCGImagePropertyIPTCExpirationTime](kcgimagepropertyiptcexpirationtime.md): The latest time on the expiration date you can use the image, in the form HHMMSS.
- [kCGImagePropertyIPTCSpecialInstructions](kcgimagepropertyiptcspecialinstructions.md): Special instructions about the use of the image.
- [kCGImagePropertyIPTCActionAdvised](kcgimagepropertyiptcactionadvised.md): The advised action.
- [kCGImagePropertyIPTCReferenceService](kcgimagepropertyiptcreferenceservice.md): The reference service.
- [kCGImagePropertyIPTCReferenceDate](kcgimagepropertyiptcreferencedate.md): The reference date.
- [kCGImagePropertyIPTCReferenceNumber](kcgimagepropertyiptcreferencenumber.md): The reference number.
- [kCGImagePropertyIPTCDateCreated](kcgimagepropertyiptcdatecreated.md): The creation date.
- [kCGImagePropertyIPTCTimeCreated](kcgimagepropertyiptctimecreated.md): The creation time.
- [kCGImagePropertyIPTCDigitalCreationDate](kcgimagepropertyiptcdigitalcreationdate.md): The digital creation date.
- [kCGImagePropertyIPTCDigitalCreationTime](kcgimagepropertyiptcdigitalcreationtime.md): The digital creation time.

### Personnel

- [kCGImagePropertyIPTCByline](kcgimagepropertyiptcbyline.md): The name of the person who created the image.
- [kCGImagePropertyIPTCBylineTitle](kcgimagepropertyiptcbylinetitle.md): The title of the person who created the image.
- [kCGImagePropertyIPTCSource](kcgimagepropertyiptcsource.md): The original owner of the image.
- [kCGImagePropertyIPTCContact](kcgimagepropertyiptccontact.md): The contact information for getting details about the image.
- [kCGImagePropertyIPTCWriterEditor](kcgimagepropertyiptcwritereditor.md): The name of the person who wrote or edited the description of the image.
- [kCGImagePropertyIPTCCreatorContactInfo](kcgimagepropertyiptccreatorcontactinfo.md): The creator’s contact info.
- [IPTC Creator Contact Info Dictionary Keys](iptc-creator-contact-info-dictionary-keys.md): Keys for an image that uses International Press Telecommunications Council (IPTC) metadata.

### Location Data

- [kCGImagePropertyIPTCCity](kcgimagepropertyiptccity.md): The city where the image was created.
- [kCGImagePropertyIPTCSubLocation](kcgimagepropertyiptcsublocation.md): The location within the city where the image was created.
- [kCGImagePropertyIPTCProvinceState](kcgimagepropertyiptcprovincestate.md): The province or state.
- [kCGImagePropertyIPTCCountryPrimaryLocationCode](kcgimagepropertyiptccountryprimarylocationcode.md): The primary country code, a three-letter code defined by ISO 3166-1.
- [kCGImagePropertyIPTCCountryPrimaryLocationName](kcgimagepropertyiptccountryprimarylocationname.md): The primary country name.
- [kCGImagePropertyIPTCOriginalTransmissionReference](kcgimagepropertyiptcoriginaltransmissionreference.md): The call letter or number combination associated with the originating point of an image.

### Software Program

- [kCGImagePropertyIPTCOriginatingProgram](kcgimagepropertyiptcoriginatingprogram.md): The originating application.
- [kCGImagePropertyIPTCProgramVersion](kcgimagepropertyiptcprogramversion.md): The application version.

### Object Details

- [kCGImagePropertyIPTCObjectTypeReference](kcgimagepropertyiptcobjecttypereference.md): The object type.
- [kCGImagePropertyIPTCObjectAttributeReference](kcgimagepropertyiptcobjectattributereference.md): The object attribute.
- [kCGImagePropertyIPTCObjectName](kcgimagepropertyiptcobjectname.md): The object name.

### IPTC Extension

- [kCGImageMetadataNamespaceIPTCExtension](kcgimagemetadatanamespaceiptcextension.md)
- [kCGImageMetadataPrefixIPTCExtension](kcgimagemetadataprefixiptcextension.md)

## See Also

### Common Image Properties

- [Image Properties](image-properties.md): Properties that apply to the container in general, and not necessarily to an individual image in the container.
- [EXIF Dictionary Keys](exif-dictionary-keys.md): Metadata keys for Exchangeable Image File Format (EXIF) data.
- [GPS Dictionary Keys](gps-dictionary-keys.md): Keys for Global Positioning System (GPS) information.
- [WebP Data](webp-data.md): Metadata keys for WebP metadata.
