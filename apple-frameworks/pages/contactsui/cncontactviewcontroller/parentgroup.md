> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/parentgroup

# parentGroup (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The group in which to add a new contact.

## Declaration

```swift
var parentGroup: CNGroup? { get set }
```

<a id="discussion"></a>

## Discussion

If you do not set this property, the view controller adds a new contact to the default group.

## See Also

### Configuring the Contact’s Relationships

- [parentContainer](parentcontainer.md): The container in which to add a new contact.

# parentGroup (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The group in which to add a new contact.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CNGroup * parentGroup;
```

<a id="discussion"></a>

## Discussion

If you do not set this property, the view controller adds a new contact to the default group.

## See Also

### Configuring the Contact’s Relationships

- [parentContainer](parentcontainer.md): The container in which to add a new contact.
