> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkaddressrepresentations/contextstyle/automatic

# MKAddressRepresentations.ContextStyle.automatic (Swift)

**Framework:** MapKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The value that represents the automatic context style.

## Declaration

```swift
case automatic
```

<a id="Discussion"></a>

## Discussion

This value tells the framework to automatically select the content style for address representations. For example, when used with [cityWithContext(\_:)](../citywithcontext%28__%29.md) MapKit only includes the region.

## See Also

### Available context styles

- [MKAddressRepresentations.ContextStyle.short](short.md): The value that represents the short context style.
- [MKAddressRepresentations.ContextStyle.full](full.md): The value that represents the full context style.

# MKAddressRepresentationsContextStyleAutomatic (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The value that represents the automatic context style.

## Declaration

```objectivec
MKAddressRepresentationsContextStyleAutomatic
```

<a id="Discussion"></a>

## Discussion

This value tells the framework to automatically select the content style for address representations. For example, when used with [cityWithContextUsingStyle:](../citywithcontext%28__%29.md) MapKit only includes the region.

## See Also

### Available context styles

- [MKAddressRepresentationsContextStyleShort](short.md): The value that represents the short context style.
- [MKAddressRepresentationsContextStyleFull](full.md): The value that represents the full context style.
