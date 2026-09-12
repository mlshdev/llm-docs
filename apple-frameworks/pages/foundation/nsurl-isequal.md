> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl-isequal](https://developer.apple.com/documentation/foundation/nsurl-isequal)

# isEqual:

**Interface languages:** Swift, Objective-C

**Framework:** Foundation  
**Kind:** Article

Returns a Boolean value that indicates whether the receiver and a given object have identical URL strings and base URLs.

<a id="overview"></a>

## Overview

This method defines what it means for instances to be equal. Two NSURLs are considered equal if and only if they return identical values for both [baseURL](nsurl/baseurl.md) and [relativeString](nsurl/relativestring.md).
