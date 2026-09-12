> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/isstoredinexternalrecord](https://developer.apple.com/documentation/coredata/nspropertydescription/isstoredinexternalrecord)

# isStoredInExternalRecord (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 11.0) · iPadOS 3.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.13) · tvOS  (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

A Boolean value that indicates whether to write the property’s data in an external record file that corresponds to the managed object.

> Spotlight integration is deprecated. Use CoreSpotlight integration instead.

## Declaration

```swift
var isStoredInExternalRecord: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the property data should be written out in an external record file corresponding to the managed object, otherwise [false](https://developer.apple.com/documentation/swift/false). For additional information, see [Core Data Spotlight Integration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SpotlightCoreData/Introduction/introSpotlightCoreData.html#//apple_ref/doc/uid/TP40008065).

<a id="Special-Considerations"></a>

### Special Considerations

This property has no effect on iOS.

## See Also

### Specifying Spotlight Support

- [isIndexedBySpotlight](isindexedbyspotlight.md): A Boolean value that indicates whether Core Data adds the property’s value to the Core Spotlight index.

# storedInExternalRecord (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 11.0) · iPadOS 3.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.13) · tvOS  (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

A Boolean value that indicates whether to write the property’s data in an external record file that corresponds to the managed object.

> Spotlight integration is deprecated. Use CoreSpotlight integration instead.

## Declaration

```objectivec
@property (getter=isStoredInExternalRecord) BOOL storedInExternalRecord;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the property data should be written out in an external record file corresponding to the managed object, otherwise [false](https://developer.apple.com/documentation/swift/false). For additional information, see [Core Data Spotlight Integration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SpotlightCoreData/Introduction/introSpotlightCoreData.html#//apple_ref/doc/uid/TP40008065).

<a id="Special-Considerations"></a>

### Special Considerations

This property has no effect on iOS.

## See Also

### Specifying Spotlight Support

- [indexedBySpotlight](isindexedbyspotlight.md): A Boolean value that indicates whether Core Data adds the property’s value to the Core Spotlight index.
