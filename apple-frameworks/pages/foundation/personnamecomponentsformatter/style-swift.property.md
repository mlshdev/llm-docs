> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponentsformatter/style-swift.property](https://developer.apple.com/documentation/foundation/personnamecomponentsformatter/style-swift.property)

# style (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The formatting style of the receiver.

## Declaration

```swift
var style: PersonNameComponentsFormatter.Style { get set }
```

<a id="Discussion"></a>

## Discussion

Styles specify which name components are used to create a string representation, and how. Examples of name components formatter styles include `long` and `abbreviated`.

## See Also

### Configuring Formatter Behavior

- [isPhonetic](isphonetic.md): A Boolean value that specifies whether the receiver should use only the phonetic representations of name components.

# style (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The formatting style of the receiver.

## Declaration

```objectivec
@property NSPersonNameComponentsFormatterStyle style;
```

<a id="Discussion"></a>

## Discussion

Styles specify which name components are used to create a string representation, and how. Examples of name components formatter styles include `long` and `abbreviated`.

## See Also

### Configuring Formatter Behavior

- [phonetic](isphonetic.md): A Boolean value that specifies whether the receiver should use only the phonetic representations of name components.
