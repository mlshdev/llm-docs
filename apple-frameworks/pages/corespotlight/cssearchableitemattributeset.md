> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset)

# CSSearchableItemAttributeSet (Swift)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The detailed metadata for a searchable item.

## Declaration

```swift
class CSSearchableItemAttributeSet
```

## Mentioned In

- [Adding your app’s content to Spotlight indexes](adding-your-app-s-content-to-spotlight-indexes.md)
- [Generating summary and priority data for indexed items](generating-summary-and-priority-data-for-indexed-items.md)
- [Searching for information in your app](searching-for-information-in-your-app.md)

<a id="overview"></a>

## Overview

A `CSSearchableItemAttributeSet` contains an extensive set of attributes that describe your app’s content. Attributes include information such as its title and a brief description. They can also refer to who created the item, what kind of data it represents, when someone created it, and more. During the indexing process, you create [CSSearchableItem](cssearchableitem.md) objects and use a `CSSearchableItemAttributeSet` to fill in the attributes for that item. During a search, you can query the index for items with attributes that match specific values.

When creating a [CSSearchableItem](cssearchableitem.md), it’s important to fill out as much information in the accompanying `CSSearchableItemAttributeSet` object as possible. You don’t have to provide values for every attribute. Instead, choose attributes that match the domain of your content. This type divides attributes into groups such as media, documents, events, places, music, images, and more. You can also add custom attributes to describe new types of content. When defining custom attributes, be as specific as possible in your definition, and provide a value for the [contentTypeTree](cssearchableitemattributeset/contenttypetree.md) property so your custom attribute inherits from a known type.

> **Important**

> Modify a `CSSearchableItemAttributeSet` object on only one thread at a time. Concurrent access to properties in an attribute set has undefined behavior.

## Topics

### Creating an attribute set

- [init(contentType:)](cssearchableitemattributeset/init%28contenttype_%29.md): Creates an attribute set for the specified content type.
- [init(coder:)](cssearchableitemattributeset/init%28coder_%29.md)

### Accessing custom attributes

- [setValue(\_:forCustomKey:)](cssearchableitemattributeset/setvalue%28__forcustomkey_%29.md): Sets the value for a custom attribute key.
- [value(forCustomKey:)](cssearchableitemattributeset/value%28forcustomkey_%29.md): Returns the value associated with the specified custom attribute key.

### Adding an indexable app entity

- [associateAppEntity(\_:priority:)](cssearchableitemattributeset/associateappentity%28__priority_%29.md): Associates the specified app entity with this attribute set.

### Handling Apple Intelligence prioritization and summarization

- [isPriority](cssearchableitemattributeset/ispriority.md): A Boolean value that indicates whether the mail or messages content represents a prioritized item.
- [textContentSummary](cssearchableitemattributeset/textcontentsummary.md): A string that presents the Apple Intelligence summarization of the item.
- [transcribedTextContent](cssearchableitemattributeset/transcribedtextcontent.md): A string that represents the text the system transcribed.

### Providing item representations

- [providerDataTypeIdentifiers](cssearchableitemattributeset/providerdatatypeidentifiers.md): An array of type identifiers that correspond to data types your delegate object can provide.
- [providerFileTypeIdentifiers](cssearchableitemattributeset/providerfiletypeidentifiers.md): An array of type identifiers that correspond to file types your delegate object can provide.
- [providerInPlaceFileTypeIdentifiers](cssearchableitemattributeset/providerinplacefiletypeidentifiers.md): An array of type identifiers that correspond to in-place file types your delegate object can provide.

### Describing general attributes

- [alternateNames](cssearchableitemattributeset/alternatenames.md): An array of localized strings that represent alternate display names for the item.
- [contentType](cssearchableitemattributeset/contenttype.md): The uniform type identifier (UTI) of the item.
- [contentTypeTree](cssearchableitemattributeset/contenttypetree.md): An attribute type that identifies a custom hierarchy of types to describe the attributes of your item.
- [contentURL](cssearchableitemattributeset/contenturl.md): The file URL of the content to index.
- [darkThumbnailURL](cssearchableitemattributeset/darkthumbnailurl.md): The local file URL of the thumbnail image for the item when Dark Mode is active.
- [displayName](cssearchableitemattributeset/displayname.md): A localized string that contains the name of the item, suitable to display in the user interface.
- [keywords](cssearchableitemattributeset/keywords.md): An array of keywords associated with the item, such as work, birthday, important, and so on.
- [metadataModificationDate](cssearchableitemattributeset/metadatamodificationdate.md): The date on which the last metadata attribute was changed.
- [path](cssearchableitemattributeset/path.md): The complete path to the item.
- [rankingHint](cssearchableitemattributeset/rankinghint.md): A number that indicates the relative importance of the item among other items from the app.
- [relatedUniqueIdentifier](cssearchableitemattributeset/relateduniqueidentifier.md): The unique identifier for the item to which the activity is related.
- [thumbnailData](cssearchableitemattributeset/thumbnaildata.md): Image data that represents the thumbnail of the item.
- [thumbnailURL](cssearchableitemattributeset/thumbnailurl.md): The local file URL of the thumbnail image for the item.
- [title](cssearchableitemattributeset/title.md): The title of the item.
- [domainIdentifier](cssearchableitemattributeset/domainidentifier.md): An identifier that represents the domain or owner of the item.
- [weakRelatedUniqueIdentifier](cssearchableitemattributeset/weakrelateduniqueidentifier.md): The unique identifier for the item to which the activity is related, but not linked.

### Describing document content

- [audiences](cssearchableitemattributeset/audiences.md): A class of entity for which the item is intended or useful.
- [contentDescription](cssearchableitemattributeset/contentdescription.md): A description of the item’s content.
- [creator](cssearchableitemattributeset/creator.md): The name of the app that created the content.
- [encodingApplications](cssearchableitemattributeset/encodingapplications.md): The name of the apps that converted the original content into a PDF stream.
- [fileSize](cssearchableitemattributeset/filesize.md): The size of the document file.
- [fontNames](cssearchableitemattributeset/fontnames.md): An array of font names the document uses.
- [identifier](cssearchableitemattributeset/identifier.md): A formal identifier that references the document the item represents.
- [kind](cssearchableitemattributeset/kind.md): A description of the kind of document the item represents.
- [pageCount](cssearchableitemattributeset/pagecount.md): The number of pages in the document.
- [pageHeight](cssearchableitemattributeset/pageheight.md): The height of the document page, in points (72 points per inch).
- [pageWidth](cssearchableitemattributeset/pagewidth.md): The width of the document page, in points (72 points per inch).
- [securityMethod](cssearchableitemattributeset/securitymethod.md): The security method (a type of encryption) that protects the document file.
- [subject](cssearchableitemattributeset/subject.md): The subject of the document.
- [theme](cssearchableitemattributeset/theme.md): The theme of the document.

### Describing user involvement

- [userCreated](cssearchableitemattributeset/usercreated.md): A value that indicates the user created the item.
- [userCurated](cssearchableitemattributeset/usercurated.md): A value that indicates the user selected the item.
- [userOwned](cssearchableitemattributeset/userowned.md): A value that indicates the user purchased or owns the item.

### Describing events

- [allDay](cssearchableitemattributeset/allday.md): A value that indicates if the event covers an entire day.
- [completionDate](cssearchableitemattributeset/completiondate.md): The date on which the item was completed.
- [dueDate](cssearchableitemattributeset/duedate.md): The date on which the item is due.
- [endDate](cssearchableitemattributeset/enddate.md): The end date for the item.
- [importantDates](cssearchableitemattributeset/importantdates.md): An array of important dates associated with the item.
- [startDate](cssearchableitemattributeset/startdate.md): The start date for the item.

### Describing places

- [altitude](cssearchableitemattributeset/altitude.md): The altitude of the item in meters above sea level, expressed using the WGS84 datum.
- [city](cssearchableitemattributeset/city.md): The city of the item’s origin according to guidelines that the provider establishes.
- [country](cssearchableitemattributeset/country.md): The full, publishable name of the country or region in which the intellectual property of the item was created, according to guidelines the provider establishes.
- [gpsAreaInformation](cssearchableitemattributeset/gpsareainformation.md): Information about the GPS area.
- [gpsdop](cssearchableitemattributeset/gpsdop.md): The GPS dilution of precision value.
- [gpsDateStamp](cssearchableitemattributeset/gpsdatestamp.md): The date and time related to the GPS value.
- [gpsDestBearing](cssearchableitemattributeset/gpsdestbearing.md): The bearing to the destination point.
- [gpsDestDistance](cssearchableitemattributeset/gpsdestdistance.md): The distance to the destination point.
- [gpsDestLatitude](cssearchableitemattributeset/gpsdestlatitude.md): The latitude of the destination point.
- [gpsDestLongitude](cssearchableitemattributeset/gpsdestlongitude.md): The longitude of the destination point.
- [gpsDifferental](cssearchableitemattributeset/gpsdifferental.md): The differential correction applied to the GPS receiver.
- [gpsMapDatum](cssearchableitemattributeset/gpsmapdatum.md): The geodetic data that the GPS receiver uses.
- [gpsMeasureMode](cssearchableitemattributeset/gpsmeasuremode.md): The measurement precision mode in use by the GPS receiver.
- [gpsProcessingMethod](cssearchableitemattributeset/gpsprocessingmethod.md): The location finding method that the GPS receiver uses.
- [gpsStatus](cssearchableitemattributeset/gpsstatus.md): The status of the GPS receiver.
- [gpsTrack](cssearchableitemattributeset/gpstrack.md): The direction of travel of the item in degrees from true north.
- [headline](cssearchableitemattributeset/headline.md): A publishable string that provides a synopsis of the contents of the item.
- [imageDirection](cssearchableitemattributeset/imagedirection.md): The direction of the item’s image in degrees from true north.
- [instructions](cssearchableitemattributeset/instructions.md): Instructions that concern the use of the item, such as an embargo or warning.
- [latitude](cssearchableitemattributeset/latitude.md): The latitude of the item, in degrees north of the equator, expressed using the WGS84 datum.
- [longitude](cssearchableitemattributeset/longitude.md): The longitude of the item, in degrees east of the prime meridian, expressed using the WGS84 datum.
- [namedLocation](cssearchableitemattributeset/namedlocation.md): The name of the location or point of interest associated with the item.
- [speed](cssearchableitemattributeset/speed.md): The speed of the item, in kilometers per hour.
- [stateOrProvince](cssearchableitemattributeset/stateorprovince.md): The province or state of origin according to guidelines the provider establishes.
- [timestamp](cssearchableitemattributeset/timestamp.md): The timestamp on the item.
- [fullyFormattedAddress](cssearchableitemattributeset/fullyformattedaddress.md): The fully formatted address of the item, received from MapKit.
- [postalCode](cssearchableitemattributeset/postalcode.md): The postal code for the item according to guidelines the provider establishes.
- [subThoroughfare](cssearchableitemattributeset/subthoroughfare.md): The sublocation, such as a street number, for the item according to guidelines the provider establishes.
- [thoroughfare](cssearchableitemattributeset/thoroughfare.md): The thoroughfare, such as a street name, associated with the location for the item according to guidelines the provider establishes.

### Describing media

- [comment](cssearchableitemattributeset/comment.md): A comment related to the media file.
- [contentCreationDate](cssearchableitemattributeset/contentcreationdate.md): The creation date of an edited or optimized version of the song or composition.
- [contentModificationDate](cssearchableitemattributeset/contentmodificationdate.md): The date on which the contents of the file was last modified.
- [contentSources](cssearchableitemattributeset/contentsources.md): An array of sources from which the media was obtained.
- [copyright](cssearchableitemattributeset/copyright.md): The copyright date of the content.
- [downloadedDate](cssearchableitemattributeset/downloadeddate.md): The most recent date on which the file was downloaded or received.
- [editors](cssearchableitemattributeset/editors.md): A list of editors who have worked on the file.
- [lastUsedDate](cssearchableitemattributeset/lastuseddate.md): The date on which the file was last used.
- [participants](cssearchableitemattributeset/participants.md): A list of people who are visible in an image or movie or written about in a document.
- [projects](cssearchableitemattributeset/projects.md): A list of projects of which this file is a part.
- [addedDate](cssearchableitemattributeset/addeddate.md): The date on which the item was moved into its current location.
- [codecs](cssearchableitemattributeset/codecs.md): The codecs used to encode/decode the media.
- [contactKeywords](cssearchableitemattributeset/contactkeywords.md): A list of contacts who are associated with the content in some way, not including the author.
- [deliveryType](cssearchableitemattributeset/deliverytype.md): The delivery type of the file.
- [duration](cssearchableitemattributeset/duration.md): The duration (if appropriate) of the content of the file, in seconds.
- [mediaTypes](cssearchableitemattributeset/mediatypes.md): The media types present in the content.
- [organizations](cssearchableitemattributeset/organizations.md): A list of companies or organizations that created the content.
- [streamable](cssearchableitemattributeset/streamable.md): A value that indicates if the content is prepared for streaming.
- [totalBitRate](cssearchableitemattributeset/totalbitrate.md): The total bit rate of the media, combining audio and video.
- [audioBitRate](cssearchableitemattributeset/audiobitrate.md): The audio bit rate of the media.
- [version](cssearchableitemattributeset/version.md): A version string associated with the file.
- [videoBitRate](cssearchableitemattributeset/videobitrate.md): The video bit rate of the media.
- [contributors](cssearchableitemattributeset/contributors.md): A list of people, organizations, or services that made contributions to the media content.
- [languages](cssearchableitemattributeset/languages.md): A list of the included languages for the intellectual content of the media.
- [publishers](cssearchableitemattributeset/publishers.md): A list of people, organizations, services, or other entities responsible for making the media available.
- [rights](cssearchableitemattributeset/rights.md): A link to information about the rights held in and over the media.
- [role](cssearchableitemattributeset/role.md): Indicates the role of the content creator.
- [contentRating](cssearchableitemattributeset/contentrating.md): A value that indicates if the media contains explicit content.
- [coverage](cssearchableitemattributeset/coverage.md): A list of descriptors that specify the extent or scope of the media.
- [director](cssearchableitemattributeset/director.md): The name of the director of the media (for example, a movie director).
- [genre](cssearchableitemattributeset/genre.md): The genre of the media.
- [information](cssearchableitemattributeset/information.md): Information about the media.
- [local](cssearchableitemattributeset/local.md): A value that indicates if the media is local.
- [originalFormat](cssearchableitemattributeset/originalformat.md): The original format of the media.
- [originalSource](cssearchableitemattributeset/originalsource.md): The original source of the media.
- [performers](cssearchableitemattributeset/performers.md): A list of performers in the media.
- [playCount](cssearchableitemattributeset/playcount.md): A user-supplied play count for the media.
- [producer](cssearchableitemattributeset/producer.md): The producer of the content.
- [rating](cssearchableitemattributeset/rating.md): The user-supplied rating of the media.
- [ratingDescription](cssearchableitemattributeset/ratingdescription.md): A description of the rating.
- [url](cssearchableitemattributeset/url.md): The URL associated with the media.

### Describing music

- [album](cssearchableitemattributeset/album.md): The title for a collection of audio media.
- [artist](cssearchableitemattributeset/artist.md): The artist associated with the media.
- [audioChannelCount](cssearchableitemattributeset/audiochannelcount.md): The number of channels in the audio data that the file contains.
- [audioEncodingApplication](cssearchableitemattributeset/audioencodingapplication.md): The name of the application that encoded the data the audio file contains.
- [audioSampleRate](cssearchableitemattributeset/audiosamplerate.md): The sample rate of the audio data the file contains, as a float value representing Hz (audio frames per second), such as 44100.0 or 22254.54.
- [audioTrackNumber](cssearchableitemattributeset/audiotracknumber.md): The track number of a song or audio composition when part of an album.
- [composer](cssearchableitemattributeset/composer.md): The composer of the song or audio composition that the audio file contains.
- [keySignature](cssearchableitemattributeset/keysignature.md): The musical key of the song or audio composition that the file contains, such as C, Dm, or F#m.
- [lyricist](cssearchableitemattributeset/lyricist.md): The lyricist or text writer for the song or audio composition that the file contains.
- [musicalGenre](cssearchableitemattributeset/musicalgenre.md): The musical genre of the song or audio composition that the file contains, such as jazz, pop, rock, or classical.
- [recordingDate](cssearchableitemattributeset/recordingdate.md): The recording date of the song or composition.
- [tempo](cssearchableitemattributeset/tempo.md): The tempo of the music that the audio file contains, in beats per minute.
- [timeSignature](cssearchableitemattributeset/timesignature.md): The time signature of the musical composition that the audio or MIDI file contains, in a string, such as “4/4” or “7/8”.
- [generalMIDISequence](cssearchableitemattributeset/generalmidisequence.md): A value that indicates whether the MIDI sequence the file contains is set up for use with a general MIDI device.
- [musicalInstrumentCategory](cssearchableitemattributeset/musicalinstrumentcategory.md): The category of the instrument associated with the audio file.
- [musicalInstrumentName](cssearchableitemattributeset/musicalinstrumentname.md): The name of an instrument within the context of an instrument category.

### Describing images

- [isoSpeed](cssearchableitemattributeset/isospeed.md): The ISO speed setting at the time the camera captured the image.
- [acquisitionMake](cssearchableitemattributeset/acquisitionmake.md): The manufacturer of the device that captured the image.
- [acquisitionModel](cssearchableitemattributeset/acquisitionmodel.md): The model of the device that captured the image.
- [aperture](cssearchableitemattributeset/aperture.md): The size of the lens aperture at the time the camera captured the image, as a log-scale APEX value.
- [bitsPerSample](cssearchableitemattributeset/bitspersample.md): The number of bits per sample.
- [cameraOwner](cssearchableitemattributeset/cameraowner.md): The owner of the camera that captured the image.
- [colorSpace](cssearchableitemattributeset/colorspace.md): The color space model the image uses, such as RGB, CMYK, YUV, or YCbCr.
- [flashOn](cssearchableitemattributeset/flashon.md): A value that indicates if the camera used a flash to capture the image.
- [focalLength](cssearchableitemattributeset/focallength.md): The actual focal length of the lens, in millimeters.
- [focalLength35mm](cssearchableitemattributeset/focallength35mm.md): A value that indicates if the focal length is 35mm.
- [layerNames](cssearchableitemattributeset/layernames.md): An array that contains the names of the various layers in the file.
- [lensModel](cssearchableitemattributeset/lensmodel.md): The model of the lens that captured the image.
- [orientation](cssearchableitemattributeset/orientation.md): The orientation of the data.
- [pixelCount](cssearchableitemattributeset/pixelcount.md): The total number of pixels in the image.
- [pixelHeight](cssearchableitemattributeset/pixelheight.md): The height of the item, such as image or video frame height, in pixels.
- [pixelWidth](cssearchableitemattributeset/pixelwidth.md): The width of the item, such as image or video frame width, in pixels.
- [whiteBalance](cssearchableitemattributeset/whitebalance.md): The white balance setting when the camera captured the image.
- [exifgpsVersion](cssearchableitemattributeset/exifgpsversion.md): The version of GPS Info IFD header that was used to generate the metadata for the image.
- [exifVersion](cssearchableitemattributeset/exifversion.md): The version of the EXIF header that was used to generate the metadata for the image.
- [exposureMode](cssearchableitemattributeset/exposuremode.md): The mode the camera used for the exposure of the image.
- [exposureProgram](cssearchableitemattributeset/exposureprogram.md): The class of the program the camera used to set exposure when capturing the image.
- [exposureTime](cssearchableitemattributeset/exposuretime.md): The time that the lens was open during exposure, in seconds.
- [exposureTimeString](cssearchableitemattributeset/exposuretimestring.md): The time that the lens was open during exposure, in a string, such as “1/250 seconds”.
- [fNumber](cssearchableitemattributeset/fnumber.md): The focal length of the lens, divided by the diameter of the aperture when the camera captured the image.
- [hasAlphaChannel](cssearchableitemattributeset/hasalphachannel.md): Indicates if the image file has an alpha channel.
- [maxAperture](cssearchableitemattributeset/maxaperture.md): The smallest F number of the lens.
- [meteringMode](cssearchableitemattributeset/meteringmode.md): The metering mode.
- [profileName](cssearchableitemattributeset/profilename.md): The name of the color profile the camera used for the image.
- [redEyeOn](cssearchableitemattributeset/redeyeon.md): A value that indicates if the camera used red-eye reduction when capturing the image.
- [resolutionHeightDPI](cssearchableitemattributeset/resolutionheightdpi.md): The resolution height of the image, in DPI.
- [resolutionWidthDPI](cssearchableitemattributeset/resolutionwidthdpi.md): The resolution width of the image, in DPI.

### Describing messages

- [Common Mailbox Identifiers](common-mailbox-identifiers.md): Constants that describe common mailbox names.
- [htmlContentData](cssearchableitemattributeset/htmlcontentdata.md): The HTML content of the document encoded as an NSData object representing a UTF-8 encoded string.
- [accountHandles](cssearchableitemattributeset/accounthandles.md): An array of the canonical handles for the account with which the message is associated.
- [accountIdentifier](cssearchableitemattributeset/accountidentifier.md): The unique identifier for the account with which the message is associated, if any.
- [additionalRecipients](cssearchableitemattributeset/additionalrecipients.md): An array of [CSPerson](csperson.md) objects representing the content of the Cc: field in an email message.
- [authorAddresses](cssearchableitemattributeset/authoraddresses.md): An array of addresses associated with the author of the message.
- [authorEmailAddresses](cssearchableitemattributeset/authoremailaddresses.md): An array of email addresses associated with the author of the message.
- [authorNames](cssearchableitemattributeset/authornames.md): An array of names representing the authors who have worked on the message.
- [authors](cssearchableitemattributeset/authors.md): An array of [CSPerson](csperson.md) objects representing the content of the From: field in an item.
- [emailAddresses](cssearchableitemattributeset/emailaddresses.md): An array of email addresses associated with the message.
- [emailHeaders](cssearchableitemattributeset/emailheaders.md): A dictionary that contains all the headers of the message.
- [hiddenAdditionalRecipients](cssearchableitemattributeset/hiddenadditionalrecipients.md): An array of [CSPerson](csperson.md) objects representing the content of the Bcc: field in an email message.
- [instantMessageAddresses](cssearchableitemattributeset/instantmessageaddresses.md): An array of instant message addresses for the message.
- [likelyJunk](cssearchableitemattributeset/likelyjunk.md): A value that indicates if the message is likely to be considered junk.
- [mailboxIdentifiers](cssearchableitemattributeset/mailboxidentifiers.md): An array of mailbox identifiers associated with the message.
- [phoneNumbers](cssearchableitemattributeset/phonenumbers.md): An array of phone numbers associated with the message.
- [primaryRecipients](cssearchableitemattributeset/primaryrecipients.md): An array of [CSPerson](csperson.md) objects representing the content of the To: field in an email message.
- [recipientAddresses](cssearchableitemattributeset/recipientaddresses.md): An array of addresses associated with the recipients of the message.
- [recipientEmailAddresses](cssearchableitemattributeset/recipientemailaddresses.md): An array of email addresses associated with the recipient.
- [recipientNames](cssearchableitemattributeset/recipientnames.md): An array of names representing the recipients of this message.
- [textContent](cssearchableitemattributeset/textcontent.md): The textual content of the message.

### Describing containment

- [containerDisplayName](cssearchableitemattributeset/containerdisplayname.md): A localized string that specifies the name of a container to which the item belongs, suitable to display in the user interface.
- [containerIdentifier](cssearchableitemattributeset/containeridentifier.md): The identifier of the container to which the item belongs.
- [containerOrder](cssearchableitemattributeset/containerorder.md): The order of the item within the container.
- [containerTitle](cssearchableitemattributeset/containertitle.md): The title of the container to which the item belongs.

### Describing supporting actions

- [actionIdentifiers](cssearchableitemattributeset/actionidentifiers.md): The identifiers that specify custom actions the app supports for the item.
- [supportsNavigation](cssearchableitemattributeset/supportsnavigation.md): A value that indicates whether the item contains information sufficient to provide navigation to the location it represents.
- [supportsPhoneCall](cssearchableitemattributeset/supportsphonecall.md): A value that indicates whether the item contains information sufficient to allow a phone call to a number associated with the item.
- [sharedItemContentType](cssearchableitemattributeset/shareditemcontenttype.md): The file type of the item to enable the user to share items from Spotlight.
- [CSActionIdentifier](csactionidentifier.md): A key that specifies the action’s identifier in a user activity.

### Deprecated

- [init(itemContentType:)](cssearchableitemattributeset/init%28itemcontenttype_%29.md): Deprecated. Creates an attribute set for the specified content type.

### Instance Properties

- [relatedAppEntityIdentifier](cssearchableitemattributeset/relatedappentityidentifier.md): The identifier of the related indexed entity for this searchable item’s attribute set.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Searchable items

- [CSSearchableItem](cssearchableitem.md): The details of your app-specific content that someone might search for on their devices.
- [CSCustomAttributeKey](cscustomattributekey.md): A key associated with a custom attribute for a searchable item.
- [CSLocalizedString](cslocalizedstring.md): An object that displays localized text in search results related to your app.
- [CSPerson](csperson.md): An object that represents a person in the context of search results.

# CSSearchableItemAttributeSet (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The detailed metadata for a searchable item.

## Declaration

```objectivec
@interface CSSearchableItemAttributeSet : NSObject
```

## Mentioned In

- [Adding your app’s content to Spotlight indexes](adding-your-app-s-content-to-spotlight-indexes.md)
- [Generating summary and priority data for indexed items](generating-summary-and-priority-data-for-indexed-items.md)
- [Searching for information in your app](searching-for-information-in-your-app.md)

<a id="overview"></a>

## Overview

A `CSSearchableItemAttributeSet` contains an extensive set of attributes that describe your app’s content. Attributes include information such as its title and a brief description. They can also refer to who created the item, what kind of data it represents, when someone created it, and more. During the indexing process, you create [CSSearchableItem](cssearchableitem.md) objects and use a `CSSearchableItemAttributeSet` to fill in the attributes for that item. During a search, you can query the index for items with attributes that match specific values.

When creating a [CSSearchableItem](cssearchableitem.md), it’s important to fill out as much information in the accompanying `CSSearchableItemAttributeSet` object as possible. You don’t have to provide values for every attribute. Instead, choose attributes that match the domain of your content. This type divides attributes into groups such as media, documents, events, places, music, images, and more. You can also add custom attributes to describe new types of content. When defining custom attributes, be as specific as possible in your definition, and provide a value for the [contentTypeTree](cssearchableitemattributeset/contenttypetree.md) property so your custom attribute inherits from a known type.

> **Important**

> Modify a `CSSearchableItemAttributeSet` object on only one thread at a time. Concurrent access to properties in an attribute set has undefined behavior.

## Topics

### Creating an attribute set

- [initWithContentType:](cssearchableitemattributeset/init%28contenttype_%29.md): Creates an attribute set for the specified content type.

### Accessing custom attributes

- [setValue:forCustomKey:](cssearchableitemattributeset/setvalue%28__forcustomkey_%29.md): Sets the value for a custom attribute key.
- [valueForCustomKey:](cssearchableitemattributeset/value%28forcustomkey_%29.md): Returns the value associated with the specified custom attribute key.

### Handling Apple Intelligence prioritization and summarization

- [isPriority](cssearchableitemattributeset/ispriority.md): A Boolean value that indicates whether the mail or messages content represents a prioritized item.
- [textContentSummary](cssearchableitemattributeset/textcontentsummary.md): A string that presents the Apple Intelligence summarization of the item.
- [transcribedTextContent](cssearchableitemattributeset/transcribedtextcontent.md): A string that represents the text the system transcribed.

### Providing item representations

- [providerDataTypeIdentifiers](cssearchableitemattributeset/providerdatatypeidentifiers.md): An array of type identifiers that correspond to data types your delegate object can provide.
- [providerFileTypeIdentifiers](cssearchableitemattributeset/providerfiletypeidentifiers.md): An array of type identifiers that correspond to file types your delegate object can provide.
- [providerInPlaceFileTypeIdentifiers](cssearchableitemattributeset/providerinplacefiletypeidentifiers.md): An array of type identifiers that correspond to in-place file types your delegate object can provide.

### Describing general attributes

- [alternateNames](cssearchableitemattributeset/alternatenames.md): An array of localized strings that represent alternate display names for the item.
- [contentType](cssearchableitemattributeset/contenttype.md): The uniform type identifier (UTI) of the item.
- [contentTypeTree](cssearchableitemattributeset/contenttypetree.md): An attribute type that identifies a custom hierarchy of types to describe the attributes of your item.
- [contentURL](cssearchableitemattributeset/contenturl.md): The file URL of the content to index.
- [darkThumbnailURL](cssearchableitemattributeset/darkthumbnailurl.md): The local file URL of the thumbnail image for the item when Dark Mode is active.
- [displayName](cssearchableitemattributeset/displayname.md): A localized string that contains the name of the item, suitable to display in the user interface.
- [keywords](cssearchableitemattributeset/keywords.md): An array of keywords associated with the item, such as work, birthday, important, and so on.
- [metadataModificationDate](cssearchableitemattributeset/metadatamodificationdate.md): The date on which the last metadata attribute was changed.
- [path](cssearchableitemattributeset/path.md): The complete path to the item.
- [rankingHint](cssearchableitemattributeset/rankinghint.md): A number that indicates the relative importance of the item among other items from the app.
- [relatedUniqueIdentifier](cssearchableitemattributeset/relateduniqueidentifier.md): The unique identifier for the item to which the activity is related.
- [thumbnailData](cssearchableitemattributeset/thumbnaildata.md): Image data that represents the thumbnail of the item.
- [thumbnailURL](cssearchableitemattributeset/thumbnailurl.md): The local file URL of the thumbnail image for the item.
- [title](cssearchableitemattributeset/title.md): The title of the item.
- [domainIdentifier](cssearchableitemattributeset/domainidentifier.md): An identifier that represents the domain or owner of the item.
- [weakRelatedUniqueIdentifier](cssearchableitemattributeset/weakrelateduniqueidentifier.md): The unique identifier for the item to which the activity is related, but not linked.

### Describing document content

- [audiences](cssearchableitemattributeset/audiences.md): A class of entity for which the item is intended or useful.
- [contentDescription](cssearchableitemattributeset/contentdescription.md): A description of the item’s content.
- [creator](cssearchableitemattributeset/creator.md): The name of the app that created the content.
- [encodingApplications](cssearchableitemattributeset/encodingapplications.md): The name of the apps that converted the original content into a PDF stream.
- [fileSize](cssearchableitemattributeset/filesize.md): The size of the document file.
- [fontNames](cssearchableitemattributeset/fontnames.md): An array of font names the document uses.
- [identifier](cssearchableitemattributeset/identifier.md): A formal identifier that references the document the item represents.
- [kind](cssearchableitemattributeset/kind.md): A description of the kind of document the item represents.
- [pageCount](cssearchableitemattributeset/pagecount.md): The number of pages in the document.
- [pageHeight](cssearchableitemattributeset/pageheight.md): The height of the document page, in points (72 points per inch).
- [pageWidth](cssearchableitemattributeset/pagewidth.md): The width of the document page, in points (72 points per inch).
- [securityMethod](cssearchableitemattributeset/securitymethod.md): The security method (a type of encryption) that protects the document file.
- [subject](cssearchableitemattributeset/subject.md): The subject of the document.
- [theme](cssearchableitemattributeset/theme.md): The theme of the document.

### Describing user involvement

- [userCreated](cssearchableitemattributeset/usercreated.md): A value that indicates the user created the item.
- [userCurated](cssearchableitemattributeset/usercurated.md): A value that indicates the user selected the item.
- [userOwned](cssearchableitemattributeset/userowned.md): A value that indicates the user purchased or owns the item.

### Describing events

- [allDay](cssearchableitemattributeset/allday.md): A value that indicates if the event covers an entire day.
- [completionDate](cssearchableitemattributeset/completiondate.md): The date on which the item was completed.
- [dueDate](cssearchableitemattributeset/duedate.md): The date on which the item is due.
- [endDate](cssearchableitemattributeset/enddate.md): The end date for the item.
- [importantDates](cssearchableitemattributeset/importantdates.md): An array of important dates associated with the item.
- [startDate](cssearchableitemattributeset/startdate.md): The start date for the item.

### Describing places

- [altitude](cssearchableitemattributeset/altitude.md): The altitude of the item in meters above sea level, expressed using the WGS84 datum.
- [city](cssearchableitemattributeset/city.md): The city of the item’s origin according to guidelines that the provider establishes.
- [country](cssearchableitemattributeset/country.md): The full, publishable name of the country or region in which the intellectual property of the item was created, according to guidelines the provider establishes.
- [GPSAreaInformation](cssearchableitemattributeset/gpsareainformation.md): Information about the GPS area.
- [GPSDOP](cssearchableitemattributeset/gpsdop.md): The GPS dilution of precision value.
- [GPSDateStamp](cssearchableitemattributeset/gpsdatestamp.md): The date and time related to the GPS value.
- [GPSDestBearing](cssearchableitemattributeset/gpsdestbearing.md): The bearing to the destination point.
- [GPSDestDistance](cssearchableitemattributeset/gpsdestdistance.md): The distance to the destination point.
- [GPSDestLatitude](cssearchableitemattributeset/gpsdestlatitude.md): The latitude of the destination point.
- [GPSDestLongitude](cssearchableitemattributeset/gpsdestlongitude.md): The longitude of the destination point.
- [GPSDifferental](cssearchableitemattributeset/gpsdifferental.md): The differential correction applied to the GPS receiver.
- [GPSMapDatum](cssearchableitemattributeset/gpsmapdatum.md): The geodetic data that the GPS receiver uses.
- [GPSMeasureMode](cssearchableitemattributeset/gpsmeasuremode.md): The measurement precision mode in use by the GPS receiver.
- [GPSProcessingMethod](cssearchableitemattributeset/gpsprocessingmethod.md): The location finding method that the GPS receiver uses.
- [GPSStatus](cssearchableitemattributeset/gpsstatus.md): The status of the GPS receiver.
- [GPSTrack](cssearchableitemattributeset/gpstrack.md): The direction of travel of the item in degrees from true north.
- [headline](cssearchableitemattributeset/headline.md): A publishable string that provides a synopsis of the contents of the item.
- [imageDirection](cssearchableitemattributeset/imagedirection.md): The direction of the item’s image in degrees from true north.
- [instructions](cssearchableitemattributeset/instructions.md): Instructions that concern the use of the item, such as an embargo or warning.
- [latitude](cssearchableitemattributeset/latitude.md): The latitude of the item, in degrees north of the equator, expressed using the WGS84 datum.
- [longitude](cssearchableitemattributeset/longitude.md): The longitude of the item, in degrees east of the prime meridian, expressed using the WGS84 datum.
- [namedLocation](cssearchableitemattributeset/namedlocation.md): The name of the location or point of interest associated with the item.
- [speed](cssearchableitemattributeset/speed.md): The speed of the item, in kilometers per hour.
- [stateOrProvince](cssearchableitemattributeset/stateorprovince.md): The province or state of origin according to guidelines the provider establishes.
- [timestamp](cssearchableitemattributeset/timestamp.md): The timestamp on the item.
- [fullyFormattedAddress](cssearchableitemattributeset/fullyformattedaddress.md): The fully formatted address of the item, received from MapKit.
- [postalCode](cssearchableitemattributeset/postalcode.md): The postal code for the item according to guidelines the provider establishes.
- [subThoroughfare](cssearchableitemattributeset/subthoroughfare.md): The sublocation, such as a street number, for the item according to guidelines the provider establishes.
- [thoroughfare](cssearchableitemattributeset/thoroughfare.md): The thoroughfare, such as a street name, associated with the location for the item according to guidelines the provider establishes.

### Describing media

- [comment](cssearchableitemattributeset/comment.md): A comment related to the media file.
- [contentCreationDate](cssearchableitemattributeset/contentcreationdate.md): The creation date of an edited or optimized version of the song or composition.
- [contentModificationDate](cssearchableitemattributeset/contentmodificationdate.md): The date on which the contents of the file was last modified.
- [contentSources](cssearchableitemattributeset/contentsources.md): An array of sources from which the media was obtained.
- [copyright](cssearchableitemattributeset/copyright.md): The copyright date of the content.
- [downloadedDate](cssearchableitemattributeset/downloadeddate.md): The most recent date on which the file was downloaded or received.
- [editors](cssearchableitemattributeset/editors.md): A list of editors who have worked on the file.
- [lastUsedDate](cssearchableitemattributeset/lastuseddate.md): The date on which the file was last used.
- [participants](cssearchableitemattributeset/participants.md): A list of people who are visible in an image or movie or written about in a document.
- [projects](cssearchableitemattributeset/projects.md): A list of projects of which this file is a part.
- [addedDate](cssearchableitemattributeset/addeddate.md): The date on which the item was moved into its current location.
- [codecs](cssearchableitemattributeset/codecs.md): The codecs used to encode/decode the media.
- [contactKeywords](cssearchableitemattributeset/contactkeywords.md): A list of contacts who are associated with the content in some way, not including the author.
- [deliveryType](cssearchableitemattributeset/deliverytype.md): The delivery type of the file.
- [duration](cssearchableitemattributeset/duration.md): The duration (if appropriate) of the content of the file, in seconds.
- [mediaTypes](cssearchableitemattributeset/mediatypes.md): The media types present in the content.
- [organizations](cssearchableitemattributeset/organizations.md): A list of companies or organizations that created the content.
- [streamable](cssearchableitemattributeset/streamable.md): A value that indicates if the content is prepared for streaming.
- [totalBitRate](cssearchableitemattributeset/totalbitrate.md): The total bit rate of the media, combining audio and video.
- [audioBitRate](cssearchableitemattributeset/audiobitrate.md): The audio bit rate of the media.
- [version](cssearchableitemattributeset/version.md): A version string associated with the file.
- [videoBitRate](cssearchableitemattributeset/videobitrate.md): The video bit rate of the media.
- [contributors](cssearchableitemattributeset/contributors.md): A list of people, organizations, or services that made contributions to the media content.
- [languages](cssearchableitemattributeset/languages.md): A list of the included languages for the intellectual content of the media.
- [publishers](cssearchableitemattributeset/publishers.md): A list of people, organizations, services, or other entities responsible for making the media available.
- [rights](cssearchableitemattributeset/rights.md): A link to information about the rights held in and over the media.
- [role](cssearchableitemattributeset/role.md): Indicates the role of the content creator.
- [contentRating](cssearchableitemattributeset/contentrating.md): A value that indicates if the media contains explicit content.
- [coverage](cssearchableitemattributeset/coverage.md): A list of descriptors that specify the extent or scope of the media.
- [director](cssearchableitemattributeset/director.md): The name of the director of the media (for example, a movie director).
- [genre](cssearchableitemattributeset/genre.md): The genre of the media.
- [information](cssearchableitemattributeset/information.md): Information about the media.
- [local](cssearchableitemattributeset/local.md): A value that indicates if the media is local.
- [originalFormat](cssearchableitemattributeset/originalformat.md): The original format of the media.
- [originalSource](cssearchableitemattributeset/originalsource.md): The original source of the media.
- [performers](cssearchableitemattributeset/performers.md): A list of performers in the media.
- [playCount](cssearchableitemattributeset/playcount.md): A user-supplied play count for the media.
- [producer](cssearchableitemattributeset/producer.md): The producer of the content.
- [rating](cssearchableitemattributeset/rating.md): The user-supplied rating of the media.
- [ratingDescription](cssearchableitemattributeset/ratingdescription.md): A description of the rating.
- [URL](cssearchableitemattributeset/url.md): The URL associated with the media.

### Describing music

- [album](cssearchableitemattributeset/album.md): The title for a collection of audio media.
- [artist](cssearchableitemattributeset/artist.md): The artist associated with the media.
- [audioChannelCount](cssearchableitemattributeset/audiochannelcount.md): The number of channels in the audio data that the file contains.
- [audioEncodingApplication](cssearchableitemattributeset/audioencodingapplication.md): The name of the application that encoded the data the audio file contains.
- [audioSampleRate](cssearchableitemattributeset/audiosamplerate.md): The sample rate of the audio data the file contains, as a float value representing Hz (audio frames per second), such as 44100.0 or 22254.54.
- [audioTrackNumber](cssearchableitemattributeset/audiotracknumber.md): The track number of a song or audio composition when part of an album.
- [composer](cssearchableitemattributeset/composer.md): The composer of the song or audio composition that the audio file contains.
- [keySignature](cssearchableitemattributeset/keysignature.md): The musical key of the song or audio composition that the file contains, such as C, Dm, or F#m.
- [lyricist](cssearchableitemattributeset/lyricist.md): The lyricist or text writer for the song or audio composition that the file contains.
- [musicalGenre](cssearchableitemattributeset/musicalgenre.md): The musical genre of the song or audio composition that the file contains, such as jazz, pop, rock, or classical.
- [recordingDate](cssearchableitemattributeset/recordingdate.md): The recording date of the song or composition.
- [tempo](cssearchableitemattributeset/tempo.md): The tempo of the music that the audio file contains, in beats per minute.
- [timeSignature](cssearchableitemattributeset/timesignature.md): The time signature of the musical composition that the audio or MIDI file contains, in a string, such as “4/4” or “7/8”.
- [generalMIDISequence](cssearchableitemattributeset/generalmidisequence.md): A value that indicates whether the MIDI sequence the file contains is set up for use with a general MIDI device.
- [musicalInstrumentCategory](cssearchableitemattributeset/musicalinstrumentcategory.md): The category of the instrument associated with the audio file.
- [musicalInstrumentName](cssearchableitemattributeset/musicalinstrumentname.md): The name of an instrument within the context of an instrument category.

### Describing images

- [ISOSpeed](cssearchableitemattributeset/isospeed.md): The ISO speed setting at the time the camera captured the image.
- [acquisitionMake](cssearchableitemattributeset/acquisitionmake.md): The manufacturer of the device that captured the image.
- [acquisitionModel](cssearchableitemattributeset/acquisitionmodel.md): The model of the device that captured the image.
- [aperture](cssearchableitemattributeset/aperture.md): The size of the lens aperture at the time the camera captured the image, as a log-scale APEX value.
- [bitsPerSample](cssearchableitemattributeset/bitspersample.md): The number of bits per sample.
- [cameraOwner](cssearchableitemattributeset/cameraowner.md): The owner of the camera that captured the image.
- [colorSpace](cssearchableitemattributeset/colorspace.md): The color space model the image uses, such as RGB, CMYK, YUV, or YCbCr.
- [flashOn](cssearchableitemattributeset/flashon.md): A value that indicates if the camera used a flash to capture the image.
- [focalLength](cssearchableitemattributeset/focallength.md): The actual focal length of the lens, in millimeters.
- [focalLength35mm](cssearchableitemattributeset/focallength35mm.md): A value that indicates if the focal length is 35mm.
- [layerNames](cssearchableitemattributeset/layernames.md): An array that contains the names of the various layers in the file.
- [lensModel](cssearchableitemattributeset/lensmodel.md): The model of the lens that captured the image.
- [orientation](cssearchableitemattributeset/orientation.md): The orientation of the data.
- [pixelCount](cssearchableitemattributeset/pixelcount.md): The total number of pixels in the image.
- [pixelHeight](cssearchableitemattributeset/pixelheight.md): The height of the item, such as image or video frame height, in pixels.
- [pixelWidth](cssearchableitemattributeset/pixelwidth.md): The width of the item, such as image or video frame width, in pixels.
- [whiteBalance](cssearchableitemattributeset/whitebalance.md): The white balance setting when the camera captured the image.
- [EXIFGPSVersion](cssearchableitemattributeset/exifgpsversion.md): The version of GPS Info IFD header that was used to generate the metadata for the image.
- [EXIFVersion](cssearchableitemattributeset/exifversion.md): The version of the EXIF header that was used to generate the metadata for the image.
- [exposureMode](cssearchableitemattributeset/exposuremode.md): The mode the camera used for the exposure of the image.
- [exposureProgram](cssearchableitemattributeset/exposureprogram.md): The class of the program the camera used to set exposure when capturing the image.
- [exposureTime](cssearchableitemattributeset/exposuretime.md): The time that the lens was open during exposure, in seconds.
- [exposureTimeString](cssearchableitemattributeset/exposuretimestring.md): The time that the lens was open during exposure, in a string, such as “1/250 seconds”.
- [fNumber](cssearchableitemattributeset/fnumber.md): The focal length of the lens, divided by the diameter of the aperture when the camera captured the image.
- [hasAlphaChannel](cssearchableitemattributeset/hasalphachannel.md): Indicates if the image file has an alpha channel.
- [maxAperture](cssearchableitemattributeset/maxaperture.md): The smallest F number of the lens.
- [meteringMode](cssearchableitemattributeset/meteringmode.md): The metering mode.
- [profileName](cssearchableitemattributeset/profilename.md): The name of the color profile the camera used for the image.
- [redEyeOn](cssearchableitemattributeset/redeyeon.md): A value that indicates if the camera used red-eye reduction when capturing the image.
- [resolutionHeightDPI](cssearchableitemattributeset/resolutionheightdpi.md): The resolution height of the image, in DPI.
- [resolutionWidthDPI](cssearchableitemattributeset/resolutionwidthdpi.md): The resolution width of the image, in DPI.

### Describing messages

- [Common Mailbox Identifiers](common-mailbox-identifiers.md): Constants that describe common mailbox names.
- [HTMLContentData](cssearchableitemattributeset/htmlcontentdata.md): The HTML content of the document encoded as an NSData object representing a UTF-8 encoded string.
- [accountHandles](cssearchableitemattributeset/accounthandles.md): An array of the canonical handles for the account with which the message is associated.
- [accountIdentifier](cssearchableitemattributeset/accountidentifier.md): The unique identifier for the account with which the message is associated, if any.
- [additionalRecipients](cssearchableitemattributeset/additionalrecipients.md): An array of [CSPerson](csperson.md) objects representing the content of the Cc: field in an email message.
- [authorAddresses](cssearchableitemattributeset/authoraddresses.md): An array of addresses associated with the author of the message.
- [authorEmailAddresses](cssearchableitemattributeset/authoremailaddresses.md): An array of email addresses associated with the author of the message.
- [authorNames](cssearchableitemattributeset/authornames.md): An array of names representing the authors who have worked on the message.
- [authors](cssearchableitemattributeset/authors.md): An array of [CSPerson](csperson.md) objects representing the content of the From: field in an item.
- [emailAddresses](cssearchableitemattributeset/emailaddresses.md): An array of email addresses associated with the message.
- [emailHeaders](cssearchableitemattributeset/emailheaders.md): A dictionary that contains all the headers of the message.
- [hiddenAdditionalRecipients](cssearchableitemattributeset/hiddenadditionalrecipients.md): An array of [CSPerson](csperson.md) objects representing the content of the Bcc: field in an email message.
- [instantMessageAddresses](cssearchableitemattributeset/instantmessageaddresses.md): An array of instant message addresses for the message.
- [likelyJunk](cssearchableitemattributeset/likelyjunk.md): A value that indicates if the message is likely to be considered junk.
- [mailboxIdentifiers](cssearchableitemattributeset/mailboxidentifiers.md): An array of mailbox identifiers associated with the message.
- [phoneNumbers](cssearchableitemattributeset/phonenumbers.md): An array of phone numbers associated with the message.
- [primaryRecipients](cssearchableitemattributeset/primaryrecipients.md): An array of [CSPerson](csperson.md) objects representing the content of the To: field in an email message.
- [recipientAddresses](cssearchableitemattributeset/recipientaddresses.md): An array of addresses associated with the recipients of the message.
- [recipientEmailAddresses](cssearchableitemattributeset/recipientemailaddresses.md): An array of email addresses associated with the recipient.
- [recipientNames](cssearchableitemattributeset/recipientnames.md): An array of names representing the recipients of this message.
- [textContent](cssearchableitemattributeset/textcontent.md): The textual content of the message.

### Describing containment

- [containerDisplayName](cssearchableitemattributeset/containerdisplayname.md): A localized string that specifies the name of a container to which the item belongs, suitable to display in the user interface.
- [containerIdentifier](cssearchableitemattributeset/containeridentifier.md): The identifier of the container to which the item belongs.
- [containerOrder](cssearchableitemattributeset/containerorder.md): The order of the item within the container.
- [containerTitle](cssearchableitemattributeset/containertitle.md): The title of the container to which the item belongs.

### Describing supporting actions

- [actionIdentifiers](cssearchableitemattributeset/actionidentifiers.md): The identifiers that specify custom actions the app supports for the item.
- [supportsNavigation](cssearchableitemattributeset/supportsnavigation.md): A value that indicates whether the item contains information sufficient to provide navigation to the location it represents.
- [supportsPhoneCall](cssearchableitemattributeset/supportsphonecall.md): A value that indicates whether the item contains information sufficient to allow a phone call to a number associated with the item.
- [sharedItemContentType](cssearchableitemattributeset/shareditemcontenttype.md): The file type of the item to enable the user to share items from Spotlight.
- [CSActionIdentifier](csactionidentifier.md): A key that specifies the action’s identifier in a user activity.

### Deprecated

- [initWithItemContentType:](cssearchableitemattributeset/init%28itemcontenttype_%29.md): Deprecated. Creates an attribute set for the specified content type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Searchable items

- [CSSearchableItem](cssearchableitem.md): The details of your app-specific content that someone might search for on their devices.
- [CSCustomAttributeKey](cscustomattributekey.md): A key associated with a custom attribute for a searchable item.
- [CSLocalizedString](cslocalizedstring.md): An object that displays localized text in search results related to your app.
- [CSPerson](csperson.md): An object that represents a person in the context of search results.
