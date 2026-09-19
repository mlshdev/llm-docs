> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfsetgettypeid()

# CFSetGetTypeID() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFSet type.

## Declaration

```swift
func CFSetGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFSet type.

<a id="Discussion"></a>

## Discussion

CFMutableSet has the same type identifier as CFSet.

# CFSetGetTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFSet type.

## Declaration

```objectivec
extern CFTypeID CFSetGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFSet type.

<a id="Discussion"></a>

## Discussion

CFMutableSet has the same type identifier as CFSet.
