> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelbuttonconfiguration/secondarybutton

# secondaryButton (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The optional button you use to perform a secondary action.

## Declaration

```swift
@NSCopying var secondaryButton: CPButton? { get }
```

<a id="discussion"></a>

## Discussion

Specify this button at initialization time and access it using this property. The value of this property can be `nil`.

# secondaryButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The optional button you use to perform a secondary action.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CPButton * secondaryButton;
```

<a id="discussion"></a>

## Discussion

Specify this button at initialization time and access it using this property. The value of this property can be `nil`.
