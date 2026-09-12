> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnlabeledvalue/identifier](https://developer.apple.com/documentation/contacts/cnlabeledvalue/identifier)

# identifier (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the labeled value object.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

It is recommended that you use the `identifier` when searching for a previously known labeled value object in a re-fetched contact. The identifier can be persisted between the app launches.

# identifier (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the labeled value object.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

It is recommended that you use the `identifier` when searching for a previously known labeled value object in a re-fetched contact. The identifier can be persisted between the app launches.
