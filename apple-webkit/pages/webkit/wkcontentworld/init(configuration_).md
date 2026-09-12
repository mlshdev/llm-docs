> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentworld/init(configuration:)](https://developer.apple.com/documentation/webkit/wkcontentworld/init(configuration:))

# init(configuration:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
init(configuration: WKContentWorld.Configuration)
```

<a id="discussion"></a>

## Discussion

Creates a world with the given WKContentWorldConfiguration

Unlike all other worlds, worlds created with this factory method cannot be retrieved later. Clients therefore need to take care to reference them for as long as they are needed.

# worldWithConfiguration: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
+ (WKContentWorld *) worldWithConfiguration:(WKContentWorldConfiguration *) configuration;
```

<a id="discussion"></a>

## Discussion

Creates a world with the given WKContentWorldConfiguration

Unlike all other worlds, worlds created with this factory method cannot be retrieved later. Clients therefore need to take care to reference them for as long as they are needed.
