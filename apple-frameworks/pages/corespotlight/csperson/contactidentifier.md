> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csperson/contactidentifier](https://developer.apple.com/documentation/corespotlight/csperson/contactidentifier)

# contactIdentifier (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The identifier for the contact associated with the person.

## Declaration

```swift
var contactIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

When you use the contact’s [identifier](../../contacts/cncontact/identifier.md) value for the optional [contactIdentifier](contactidentifier.md) property, it enables a direct way to look up the associated contact.

## See Also

### Accessing person properties

- [displayName](displayname.md): A display name for the person.
- [handleIdentifier](handleidentifier.md): A key that identifies the type of contact property represented by the person object’s handle.
- [handles](handles.md): An array of contact handles related to the person.

# contactIdentifier (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The identifier for the contact associated with the person.

## Declaration

```objectivec
@property (copy, nullable) NSString * contactIdentifier;
```

<a id="Discussion"></a>

## Discussion

When you use the contact’s [identifier](../../contacts/cncontact/identifier.md) value for the optional [contactIdentifier](contactidentifier.md) property, it enables a direct way to look up the associated contact.

## See Also

### Accessing person properties

- [displayName](displayname.md): A display name for the person.
- [handleIdentifier](handleidentifier.md): A key that identifies the type of contact property represented by the person object’s handle.
- [handles](handles.md): An array of contact handles related to the person.
