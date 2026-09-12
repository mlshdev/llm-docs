> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/isindexedbyspotlight](https://developer.apple.com/documentation/coredata/nspropertydescription/isindexedbyspotlight)

# isIndexedBySpotlight (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether Core Data adds the property’s value to the Core Spotlight index.

## Declaration

```swift
var isIndexedBySpotlight: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  If you set this property to [true](https://developer.apple.com/documentation/swift/true) for a property description that describes a relationship, you must override [attributeSet(for:)](../nscoredatacorespotlightdelegate/attributeset%28for_%29.md) in your Core Spotlight delegate and return the necessary set of attributes. Core Data doesn’t automatically infer indexable information for relationships.

You can also set this property using the Index in Spotlight attribute in the Attributes inspector of the Core Data model editor.

## See Also

### Specifying Spotlight Support

- [isStoredInExternalRecord](isstoredinexternalrecord.md): Deprecated. A Boolean value that indicates whether to write the property’s data in an external record file that corresponds to the managed object.

# indexedBySpotlight (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether Core Data adds the property’s value to the Core Spotlight index.

## Declaration

```objectivec
@property (getter=isIndexedBySpotlight) BOOL indexedBySpotlight;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  If you set this property to [true](https://developer.apple.com/documentation/swift/true) for a property description that describes a relationship, you must override [attributeSetForObject:](../nscoredatacorespotlightdelegate/attributeset%28for_%29.md) in your Core Spotlight delegate and return the necessary set of attributes. Core Data doesn’t automatically infer indexable information for relationships.

You can also set this property using the Index in Spotlight attribute in the Attributes inspector of the Core Data model editor.

## See Also

### Specifying Spotlight Support

- [storedInExternalRecord](isstoredinexternalrecord.md): Deprecated. A Boolean value that indicates whether to write the property’s data in an external record file that corresponds to the managed object.
