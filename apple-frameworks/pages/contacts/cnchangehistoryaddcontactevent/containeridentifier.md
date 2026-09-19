> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contacts/cnchangehistoryaddcontactevent/containeridentifier

# containerIdentifier (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

A string that uniquely identifies the container where the user added the contact.

## Declaration

```swift
var containerIdentifier: String? { get }
```

## See Also

### Getting event details

- [contact](contact.md): The contact the user added.

# containerIdentifier (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

A string that uniquely identifies the container where the user added the contact.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * containerIdentifier;
```

## See Also

### Getting event details

- [contact](contact.md): The contact the user added.
