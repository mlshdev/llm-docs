> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/restrictions](https://developer.apple.com/documentation/tvmljs/restrictions)

# Restrictions

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Class  
**Availability:** tvOS 9.0+

An object used to retrieve rating restriction information.

## Declaration

```
interface Restrictions
```

<a id="overview"></a>

## Overview

Different countries often allow different levels of content to be shown. This class also allows you to specify the maximum and minimum rankings for content.

You cannot create an instance of the `Restrictions` class. An instance of this class is available from [Settings](settings.md).

## Topics

### Retrieving Restriction Information

- [allowsExplicit](restrictions/1627425-allowsexplicit.md): A boolean value that indicates whether any explicit media is allowed.
- [maxMovieRank](restrictions/1627305-maxmovierank.md): The maximum allowed ranking for a movie.
- [maxMovieRatingForCountry](restrictions/1627362-maxmovieratingforcountry.md): The maximum movie rating allowed for the specified country or region.
- [maxTVShowRank](restrictions/1627434-maxtvshowrank.md): The maximum allowed ranking for a television show.
- [maxTVShowRatingForCountry](restrictions/1627442-maxtvshowratingforcountry.md): The maximum television show rating allowed for the specified country or region.

## See Also

### Device Settings

- [Device](device.md): An object that provides information about an Apple TV and the host app installed on the device.
- [Settings](settings.md): An object that provides access to setting information for a device.
