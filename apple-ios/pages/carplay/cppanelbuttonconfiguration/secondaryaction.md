> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanelbuttonconfiguration/secondaryaction

# secondaryAction (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An optional action button to display in the panel.

## Declaration

```swift
@NSCopying var secondaryAction: CPTextButton? { get }
```

<a id="discussion"></a>

## Discussion

Specify this button at initialization time and use this property to retrieve it later.

# secondaryAction (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An optional action button to display in the panel.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CPTextButton * secondaryAction;
```

<a id="discussion"></a>

## Discussion

Specify this button at initialization time and use this property to retrieve it later.
