> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/getting-geographic-distance](https://developer.apple.com/documentation/appstoreconnectapi/getting-geographic-distance)

# Getting geographic distance

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Article

Return the relative geographic distance between two match requests.

<a id="overview"></a>

## Overview

Use the `geoLatency()` function in the expression of a matchmaking rule to get the geographic distance between two devices that submit match requests. This function uses the location of the players’ devices that the match request contains, but keeps that information private.

<a id="Declaration"></a>

### Declaration

```other
number geoLatency(object $request1, object $request2)
```

<a id="Parameters"></a>

### Parameters

-`request1`: A match request to compare with `request2`. -`request2`: A match request to compare with `request1`.

<a id="Return-value"></a>

### Return value

A value between `0.0` and `1.0` that represents the relative geographic distance between the player devices that issued these requests, where `0.0` is in the same local area and `1.0` is the longest possible distance.
