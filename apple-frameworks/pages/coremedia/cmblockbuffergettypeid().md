> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmblockbuffergettypeid()

# CMBlockBufferGetTypeID() (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the type identifier for block buffer objects.

## Declaration

```swift
func CMBlockBufferGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

Returns the `CFTypeID` corresponding to `CMBlockBuffer`.

<a id="Discussion"></a>

## Discussion

Obtains the CoreFoundation type ID for the `CMBlockBuffer` type.

# CMBlockBufferGetTypeID (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the type identifier for block buffer objects.

## Declaration

```objectivec
extern CFTypeID CMBlockBufferGetTypeID();
```

<a id="return-value"></a>

## Return Value

Returns the `CFTypeID` corresponding to `CMBlockBuffer`.

<a id="Discussion"></a>

## Discussion

Obtains the CoreFoundation type ID for the `CMBlockBuffer` type.
