> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uniformtypeidentifiers/uttypepropertylist

# UTTypePropertyList

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A base type that represents a property list.

## Declaration

```objectivec
extern UTType * const UTTypePropertyList;
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `com.apple.property-list`.

This type conforms to [UTTypeData](uttypedata.md).

## See Also

### Property lists

- [UTTypeXMLPropertyList](uttypexmlpropertylist.md): A type that represents an XML property list.
- [UTTypeBinaryPropertyList](uttypebinarypropertylist.md): A type that represents a binary property list.
