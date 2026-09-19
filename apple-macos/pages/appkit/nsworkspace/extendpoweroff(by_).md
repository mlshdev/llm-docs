> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsworkspace/extendpoweroff(by:)

# extendPowerOff(by:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests the system wait for the specified amount of time before turning off the power or logging out the user.

## Declaration

```swift
func extendPowerOff(by requested: Int) -> Int
```

## Parameters

- `requested`: The number of milliseconds to wait before turning off the power or logging off the user.

<a id="return-value"></a>

## Return Value

The number of milliseconds granted by the system. This method currently returns `0`.

<a id="Discussion"></a>

## Discussion

This method currently does nothing. Do not call it.

# extendPowerOffBy: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests the system wait for the specified amount of time before turning off the power or logging out the user.

## Declaration

```objectivec
- (NSInteger) extendPowerOffBy:(NSInteger) requested;
```

## Parameters

- `requested`: The number of milliseconds to wait before turning off the power or logging off the user.

<a id="return-value"></a>

## Return Value

The number of milliseconds granted by the system. This method currently returns `0`.

<a id="Discussion"></a>

## Discussion

This method currently does nothing. Do not call it.
