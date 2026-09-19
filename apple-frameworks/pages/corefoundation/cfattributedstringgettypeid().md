> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfattributedstringgettypeid()

# CFAttributedStringGetTypeID() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFAttributedString opaque type.

## Declaration

```swift
func CFAttributedStringGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFAttributedString opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableAttributedString objects have the same type identifier as CFAttributedString objects.

# CFAttributedStringGetTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFAttributedString opaque type.

## Declaration

```objectivec
extern CFTypeID CFAttributedStringGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFAttributedString opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableAttributedString objects have the same type identifier as CFAttributedString objects.
