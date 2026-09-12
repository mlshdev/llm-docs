> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail/init(info:)](https://developer.apple.com/documentation/carplay/cproutedetail/init(info:))

# init(info:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information with a freeform informational string.

## Declaration

```swift
convenience init(info: String)
```

## Parameters

- `info`: A localized string containing the information to display. Must not be nil.

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the informational text.

<a id="discussion"></a>

## Discussion

Use this method to display a short piece of general information about the route that does not fit any of the predefined route detail categories.

Info strings should be concise and localized. The system displays this alongside other route details during route selection and active navigation.

# routeDetailWithInfo: (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information with a freeform informational string.

## Declaration

```objectivec
+ (instancetype) routeDetailWithInfo:(NSString *) info;
```

## Parameters

- `info`: A localized string containing the information to display. Must not be nil.

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the informational text.

<a id="discussion"></a>

## Discussion

Use this method to display a short piece of general information about the route that does not fit any of the predefined route detail categories.

Info strings should be concise and localized. The system displays this alongside other route details during route selection and active navigation.
