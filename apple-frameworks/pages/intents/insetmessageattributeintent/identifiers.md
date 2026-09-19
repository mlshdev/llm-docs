> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insetmessageattributeintent/identifiers

# identifiers (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The array of message identifiers.

## Declaration

```swift
var identifiers: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

Each string in this property corresponds to a message identifier that you use to locate the corresponding message in your app. The identifiers themselves are in the [identifier](../inmessage/identifier.md) property of an [INMessage](../inmessage.md) object returned during a search.

## See Also

### Getting the Attribute Details

- [attribute](attribute.md): The attribute to apply to the messages.

# identifiers (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The array of message identifiers.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * identifiers;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<NSString *> * identifiers;
```

<a id="Discussion"></a>

## Discussion

Each string in this property corresponds to a message identifier that you use to locate the corresponding message in your app. The identifiers themselves are in the [identifier](../inmessage/identifier.md) property of an [INMessage](../inmessage.md) object returned during a search.

## See Also

### Getting the Attribute Details

- [attribute](attribute.md): The attribute to apply to the messages.
