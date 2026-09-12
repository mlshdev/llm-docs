> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/regioncode](https://developer.apple.com/documentation/foundation/nslocale/regioncode)

# regionCode (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the region code of the locale. If the `rg` subtag is present, the value of the subtag will be used. For example,  returns “GB” for “en_US@rg=gbzzzz” locale. If the `localeIdentifier` doesn’t contain a region, returns `nil`.

## Declaration

```swift
var regionCode: String? { get }
```

# regionCode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the region code of the locale. If the `rg` subtag is present, the value of the subtag will be used. For example,  returns “GB” for “en_US@rg=gbzzzz” locale. If the `localeIdentifier` doesn’t contain a region, returns `nil`.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * regionCode;
```
