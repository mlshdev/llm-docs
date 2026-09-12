> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchableitemattribute](https://developer.apple.com/documentation/corespotlight/searchableitemattribute)

# SearchableItemAttribute

**Framework:** Core Spotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An attribute from a content item that the Spotlight search tool can include in search results.

## Declaration

```swift
struct SearchableItemAttribute
```

<a id="overview"></a>

## Overview

When searching your content, the [SpotlightSearchTool](spotlightsearchtool.md) can retrieve attributes for found items in advance and include them with search results. When you configure a [CoreSpotlightSource](corespotlightsource.md) or [FileSource](filesource.md) for this tool, specify the attributes you want to retrieve from that source. The tool retrieves the attributes from any items and delivers them to the model as additional context to consider. If you don’t specify any attributes, the tool retrieves only the unique identifier of each search result.

## Topics

### Describing general attributes

- [alternateNames](searchableitemattribute/alternatenames.md)
- [contentType](searchableitemattribute/contenttype.md)
- [contentTypeTree](searchableitemattribute/contenttypetree.md)
- [contentURL](searchableitemattribute/contenturl.md)
- [darkThumbnailURL](searchableitemattribute/darkthumbnailurl.md)
- [displayName](searchableitemattribute/displayname.md)
- [keywords](searchableitemattribute/keywords.md)
- [metadataModificationDate](searchableitemattribute/metadatamodificationdate.md)
- [path](searchableitemattribute/path.md)
- [rankingHint](searchableitemattribute/rankinghint.md)
- [relatedUniqueIdentifier](searchableitemattribute/relateduniqueidentifier.md)
- [thumbnailData](searchableitemattribute/thumbnaildata.md)
- [thumbnailURL](searchableitemattribute/thumbnailurl.md)
- [title](searchableitemattribute/title.md)
- [domainIdentifier](searchableitemattribute/domainidentifier.md)
- [weakRelatedUniqueIdentifier](searchableitemattribute/weakrelateduniqueidentifier.md)

### Describing document content

- [audiences](searchableitemattribute/audiences.md)
- [contentDescription](searchableitemattribute/contentdescription.md)
- [creator](searchableitemattribute/creator.md)
- [encodingApplications](searchableitemattribute/encodingapplications.md)
- [fileSize](searchableitemattribute/filesize.md)
- [fontNames](searchableitemattribute/fontnames.md)
- [identifier](searchableitemattribute/identifier.md)
- [kind](searchableitemattribute/kind.md)
- [pageCount](searchableitemattribute/pagecount.md)
- [pageHeight](searchableitemattribute/pageheight.md)
- [pageWidth](searchableitemattribute/pagewidth.md)
- [securityMethod](searchableitemattribute/securitymethod.md)
- [subject](searchableitemattribute/subject.md)
- [theme](searchableitemattribute/theme.md)

### Describing user involvement

- [userCreated](searchableitemattribute/usercreated.md)
- [userCurated](searchableitemattribute/usercurated.md)
- [userOwned](searchableitemattribute/userowned.md)

### Describing events

- [allDay](searchableitemattribute/allday.md)
- [completionDate](searchableitemattribute/completiondate.md)
- [dueDate](searchableitemattribute/duedate.md)
- [endDate](searchableitemattribute/enddate.md)
- [importantDates](searchableitemattribute/importantdates.md)
- [startDate](searchableitemattribute/startdate.md)

### Describing places

- [altitude](searchableitemattribute/altitude.md)
- [city](searchableitemattribute/city.md)
- [country](searchableitemattribute/country.md)
- [gpsAreaInformation](searchableitemattribute/gpsareainformation.md)
- [gpsDateStamp](searchableitemattribute/gpsdatestamp.md)
- [gpsDestinationBearing](searchableitemattribute/gpsdestinationbearing.md)
- [gpsDestinationDistance](searchableitemattribute/gpsdestinationdistance.md)
- [gpsDestinationLatitude](searchableitemattribute/gpsdestinationlatitude.md)
- [gpsDestinationLongitude](searchableitemattribute/gpsdestinationlongitude.md)
- [gpsDifferential](searchableitemattribute/gpsdifferential.md)
- [gpsDilutionOfPrecision](searchableitemattribute/gpsdilutionofprecision.md)
- [gpsMapDatum](searchableitemattribute/gpsmapdatum.md)
- [gpsMeasureMode](searchableitemattribute/gpsmeasuremode.md)
- [gpsProcessingMethod](searchableitemattribute/gpsprocessingmethod.md)
- [gpsStatus](searchableitemattribute/gpsstatus.md)
- [gpsTrack](searchableitemattribute/gpstrack.md)
- [headline](searchableitemattribute/headline.md)
- [imageDirection](searchableitemattribute/imagedirection.md)
- [instructions](searchableitemattribute/instructions.md)
- [latitude](searchableitemattribute/latitude.md)
- [longitude](searchableitemattribute/longitude.md)
- [namedLocation](searchableitemattribute/namedlocation.md)
- [speed](searchableitemattribute/speed.md)
- [stateOrProvince](searchableitemattribute/stateorprovince.md)
- [timestamp](searchableitemattribute/timestamp.md)
- [fullyFormattedAddress](searchableitemattribute/fullyformattedaddress.md)
- [postalCode](searchableitemattribute/postalcode.md)
- [subThoroughfare](searchableitemattribute/subthoroughfare.md)
- [thoroughfare](searchableitemattribute/thoroughfare.md)

### Describing media

- [comment](searchableitemattribute/comment.md)
- [contentCreationDate](searchableitemattribute/contentcreationdate.md)
- [contentModificationDate](searchableitemattribute/contentmodificationdate.md)
- [contentSources](searchableitemattribute/contentsources.md)
- [copyright](searchableitemattribute/copyright.md)
- [downloadedDate](searchableitemattribute/downloadeddate.md)
- [editors](searchableitemattribute/editors.md)
- [lastUsedDate](searchableitemattribute/lastuseddate.md)
- [participants](searchableitemattribute/participants.md)
- [projects](searchableitemattribute/projects.md)
- [addedDate](searchableitemattribute/addeddate.md)
- [codecs](searchableitemattribute/codecs.md)
- [contactKeywords](searchableitemattribute/contactkeywords.md)
- [deliveryType](searchableitemattribute/deliverytype.md)
- [duration](searchableitemattribute/duration.md)
- [mediaTypes](searchableitemattribute/mediatypes.md)
- [organizations](searchableitemattribute/organizations.md)
- [streamable](searchableitemattribute/streamable.md)
- [totalBitRate](searchableitemattribute/totalbitrate.md)
- [audioBitRate](searchableitemattribute/audiobitrate.md)
- [version](searchableitemattribute/version.md)
- [videoBitRate](searchableitemattribute/videobitrate.md)
- [contributors](searchableitemattribute/contributors.md)
- [languages](searchableitemattribute/languages.md)
- [publishers](searchableitemattribute/publishers.md)
- [rights](searchableitemattribute/rights.md)
- [role](searchableitemattribute/role.md)
- [contentRating](searchableitemattribute/contentrating.md)
- [coverage](searchableitemattribute/coverage.md)
- [director](searchableitemattribute/director.md)
- [genre](searchableitemattribute/genre.md)
- [information](searchableitemattribute/information.md)
- [local](searchableitemattribute/local.md)
- [originalFormat](searchableitemattribute/originalformat.md)
- [originalSource](searchableitemattribute/originalsource.md)
- [performers](searchableitemattribute/performers.md)
- [playCount](searchableitemattribute/playcount.md)
- [producer](searchableitemattribute/producer.md)
- [rating](searchableitemattribute/rating.md)
- [ratingDescription](searchableitemattribute/ratingdescription.md)
- [url](searchableitemattribute/url.md)

### Describing music

- [album](searchableitemattribute/album.md)
- [artist](searchableitemattribute/artist.md)
- [audioChannelCount](searchableitemattribute/audiochannelcount.md)
- [audioEncodingApplication](searchableitemattribute/audioencodingapplication.md)
- [audioSampleRate](searchableitemattribute/audiosamplerate.md)
- [audioTrackNumber](searchableitemattribute/audiotracknumber.md)
- [composer](searchableitemattribute/composer.md)
- [keySignature](searchableitemattribute/keysignature.md)
- [lyricist](searchableitemattribute/lyricist.md)
- [musicalGenre](searchableitemattribute/musicalgenre.md)
- [recordingDate](searchableitemattribute/recordingdate.md)
- [tempo](searchableitemattribute/tempo.md)
- [timeSignature](searchableitemattribute/timesignature.md)
- [generalMIDISequence](searchableitemattribute/generalmidisequence.md)
- [musicalInstrumentCategory](searchableitemattribute/musicalinstrumentcategory.md)
- [musicalInstrumentName](searchableitemattribute/musicalinstrumentname.md)

### Describing images

- [isoSpeed](searchableitemattribute/isospeed.md)
- [acquisitionMake](searchableitemattribute/acquisitionmake.md)
- [acquisitionModel](searchableitemattribute/acquisitionmodel.md)
- [aperture](searchableitemattribute/aperture.md)
- [bitsPerSample](searchableitemattribute/bitspersample.md)
- [cameraOwner](searchableitemattribute/cameraowner.md)
- [colorSpace](searchableitemattribute/colorspace.md)
- [flashOn](searchableitemattribute/flashon.md)
- [focalLength](searchableitemattribute/focallength.md)
- [focalLength35mmEquivalent](searchableitemattribute/focallength35mmequivalent.md)
- [layerNames](searchableitemattribute/layernames.md)
- [lensModel](searchableitemattribute/lensmodel.md)
- [orientation](searchableitemattribute/orientation.md)
- [pixelCount](searchableitemattribute/pixelcount.md)
- [pixelHeight](searchableitemattribute/pixelheight.md)
- [pixelWidth](searchableitemattribute/pixelwidth.md)
- [whiteBalance](searchableitemattribute/whitebalance.md)
- [exifGPSVersion](searchableitemattribute/exifgpsversion.md)
- [exifVersion](searchableitemattribute/exifversion.md)
- [exposureMode](searchableitemattribute/exposuremode.md)
- [exposureProgram](searchableitemattribute/exposureprogram.md)
- [exposureTime](searchableitemattribute/exposuretime.md)
- [exposureTimeString](searchableitemattribute/exposuretimestring.md)
- [fNumber](searchableitemattribute/fnumber.md)
- [hasAlphaChannel](searchableitemattribute/hasalphachannel.md)
- [maximumAperture](searchableitemattribute/maximumaperture.md)
- [meteringMode](searchableitemattribute/meteringmode.md)
- [profileName](searchableitemattribute/profilename.md)
- [redEyeOn](searchableitemattribute/redeyeon.md)
- [resolutionHeightDPI](searchableitemattribute/resolutionheightdpi.md)
- [resolutionWidthDPI](searchableitemattribute/resolutionwidthdpi.md)

### Describing messages

- [accountHandles](searchableitemattribute/accounthandles.md)
- [accountIdentifier](searchableitemattribute/accountidentifier.md)
- [authorAddresses](searchableitemattribute/authoraddresses.md)
- [authorEmailAddresses](searchableitemattribute/authoremailaddresses.md)
- [authorNames](searchableitemattribute/authornames.md)
- [emailAddresses](searchableitemattribute/emailaddresses.md)
- [instantMessageAddresses](searchableitemattribute/instantmessageaddresses.md)
- [likelyJunk](searchableitemattribute/likelyjunk.md)
- [mailboxIdentifiers](searchableitemattribute/mailboxidentifiers.md)
- [phoneNumbers](searchableitemattribute/phonenumbers.md)
- [recipientAddresses](searchableitemattribute/recipientaddresses.md)
- [recipientEmailAddresses](searchableitemattribute/recipientemailaddresses.md)
- [recipientNames](searchableitemattribute/recipientnames.md)
- [textContent](searchableitemattribute/textcontent.md)

### Describing containment

- [containerDisplayName](searchableitemattribute/containerdisplayname.md)
- [containerIdentifier](searchableitemattribute/containeridentifier.md)
- [containerOrder](searchableitemattribute/containerorder.md)
- [containerTitle](searchableitemattribute/containertitle.md)

### Describing supporting actions

- [supportsNavigation](searchableitemattribute/supportsnavigation.md)
- [supportsPhoneCall](searchableitemattribute/supportsphonecall.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data sources

- [SearchSource](searchsource.md): A source of data for Spotlight to search.
- [CoreSpotlightSource](corespotlightsource.md): A search source that retrieves data from the app’s Spotlight index.
- [FileSource](filesource.md): A search source that retrieves indexed metadata from files and directories visible to Spotlight.
