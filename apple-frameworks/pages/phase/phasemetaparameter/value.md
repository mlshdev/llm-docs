> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemetaparameter/value](https://developer.apple.com/documentation/phase/phasemetaparameter/value)

# value (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A value for the metaparameter.

## Declaration

```swift
var value: Any { get set }
```

<a id="Discussion"></a>

## Discussion

The framework sets this property to the subclass’s initializer argument; for example, see [init(value:)](../phasenumbermetaparameterdefinition/init%28value_%29.md).

An app changes the value at runtime by calling [fade(value:duration:)](../phasenumbermetaparameter/fade%28value_duration_%29.md) on the subclass.

# value (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A value for the metaparameter.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite) id value;
```

<a id="Discussion"></a>

## Discussion

The framework sets this property to the subclass’s initializer argument; for example, see [initWithValue:](../phasenumbermetaparameterdefinition/init%28value_%29.md).

An app changes the value at runtime by calling [fadeToValue:duration:](../phasenumbermetaparameter/fade%28value_duration_%29.md) on the subclass.
