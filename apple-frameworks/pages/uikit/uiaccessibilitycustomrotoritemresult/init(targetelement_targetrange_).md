> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotoritemresult/init(targetelement:targetrange:)

# init(targetElement:targetRange:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a rotor item result from the specified target element and text range.

## Declaration

```swift
init(targetElement: any NSObjectProtocol, targetRange: UITextRange?)
```

## Parameters

- `targetElement`: The target element of the rotor.
- `targetRange`: The text range for an element that contains text, such as a text view.

<a id="return-value"></a>

## Return Value

An initialized rotor item result.

# initWithTargetElement:targetRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a rotor item result from the specified target element and text range.

## Declaration

```objectivec
- (instancetype) initWithTargetElement:(id<NSObject>) targetElement targetRange:(UITextRange *) targetRange;
```

## Parameters

- `targetElement`: The target element of the rotor.
- `targetRange`: The text range for an element that contains text, such as a text view.

<a id="return-value"></a>

## Return Value

An initialized rotor item result.
