> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecreate(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecreate(_:_:))

# ColorSyncProfileCreate(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a profile from ICC profile data.

## Declaration

```swift
func ColorSyncProfileCreate(_ data: CFData!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Unmanaged<ColorSyncProfile>?
```

## Parameters

- `data`: The ICC profile data.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

## See Also

### Embedding and extracting profiles

- [ColorSyncProfileCopyData(\_:\_:)](colorsyncprofilecopydata%28____%29.md): Copies the flattened data from a profile.

# ColorSyncProfileCreate (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a profile from ICC profile data.

## Declaration

```objectivec
extern ColorSyncProfileRefColorSyncProfileCreate(CFDataRef data, CFErrorRef*error);
```

## Parameters

- `data`: The ICC profile data.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

## See Also

### Embedding and extracting profiles

- [ColorSyncProfileCopyData](colorsyncprofilecopydata%28____%29.md): Copies the flattened data from a profile.
