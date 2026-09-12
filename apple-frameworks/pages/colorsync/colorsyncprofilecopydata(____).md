> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecopydata(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecopydata(_:_:))

# ColorSyncProfileCopyData(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Copies the flattened data from a profile.

## Declaration

```swift
func ColorSyncProfileCopyData(_ prof: ColorSyncProfile!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Unmanaged<CFData>!
```

## Parameters

- `prof`: The profile to copy the flattened data from.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

The profile data on success, or `NULL` in case of failure.

## See Also

### Embedding and extracting profiles

- [ColorSyncProfileCreate(\_:\_:)](colorsyncprofilecreate%28____%29.md): Creates a profile from ICC profile data.

# ColorSyncProfileCopyData (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Copies the flattened data from a profile.

## Declaration

```objectivec
extern CFDataRefColorSyncProfileCopyData(ColorSyncProfileRef prof, CFErrorRef*error);
```

## Parameters

- `prof`: The profile to copy the flattened data from.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

The profile data on success, or `NULL` in case of failure.

## See Also

### Embedding and extracting profiles

- [ColorSyncProfileCreate](colorsyncprofilecreate%28____%29.md): Creates a profile from ICC profile data.
