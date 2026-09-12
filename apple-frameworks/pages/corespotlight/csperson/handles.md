> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csperson/handles](https://developer.apple.com/documentation/corespotlight/csperson/handles)

# handles (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An array of contact handles related to the person.

## Declaration

```swift
var handles: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Contact handles can include phone numbers, email addresses, and URLs. For additional contact handles, see Metadata Keys in [CNContact](../../contacts/cncontact.md).

## See Also

### Accessing person properties

- [contactIdentifier](contactidentifier.md): The identifier for the contact associated with the person.
- [displayName](displayname.md): A display name for the person.
- [handleIdentifier](handleidentifier.md): A key that identifies the type of contact property represented by the person object’s handle.

# handles (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An array of contact handles related to the person.

## Declaration

```objectivec
@property (readonly) NSArray<NSString *> * handles;
```

<a id="Discussion"></a>

## Discussion

Contact handles can include phone numbers, email addresses, and URLs. For additional contact handles, see Metadata Keys in [CNContact](../../contacts/cncontact.md).

## See Also

### Accessing person properties

- [contactIdentifier](contactidentifier.md): The identifier for the contact associated with the person.
- [displayName](displayname.md): A display name for the person.
- [handleIdentifier](handleidentifier.md): A key that identifies the type of contact property represented by the person object’s handle.
