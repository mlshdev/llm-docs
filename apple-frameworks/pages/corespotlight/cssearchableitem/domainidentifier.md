> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/domainidentifier](https://developer.apple.com/documentation/corespotlight/cssearchableitem/domainidentifier)

# domainIdentifier (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An optional identifier that represents the domain or owner of the item.

## Declaration

```swift
var domainIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify a domain identifier to group items together and to make it easy to delete groups of items from the index. For example, you might specify an identifier for a mailbox in an account whose indexed data you want to remove when the account is deleted. In this example, [domainIdentifier](domainidentifier.md) should be of the form `<account-id>.<mailbox-id>`, where neither `<account-id>` nor `<mailbox-id>` contain periods. To delete all items associated with the specified account and mailbox, you can call [deleteSearchableItems(withDomainIdentifiers:completionHandler:)](../cssearchableindex/deletesearchableitems%28withdomainidentifiers_completionhandler_%29.md) with a [domainIdentifier](domainidentifier.md) of `<account-id>.<mailbox-id>`. Or to delete all items associated with all mailboxes in the specified account, you can call [deleteSearchableItems(withDomainIdentifiers:completionHandler:)](../cssearchableindex/deletesearchableitems%28withdomainidentifiers_completionhandler_%29.md) with a [domainIdentifier](domainidentifier.md) of `<account-id>`.

## See Also

### Setting attributes on a searchable item

- [uniqueIdentifier](uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [attributeSet](attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.
- [expirationDate](expirationdate.md): The date after which the searchable item should no longer exist.
- [isUpdate](isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [updateListenerOptions](updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
- [CSSearchableItem.UpdateListenerOptions](updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.

# domainIdentifier (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An optional identifier that represents the domain or owner of the item.

## Declaration

```objectivec
@property (copy, nullable) NSString * domainIdentifier;
```

<a id="Discussion"></a>

## Discussion

Specify a domain identifier to group items together and to make it easy to delete groups of items from the index. For example, you might specify an identifier for a mailbox in an account whose indexed data you want to remove when the account is deleted. In this example, [domainIdentifier](domainidentifier.md) should be of the form `<account-id>.<mailbox-id>`, where neither `<account-id>` nor `<mailbox-id>` contain periods. To delete all items associated with the specified account and mailbox, you can call [deleteSearchableItemsWithDomainIdentifiers:completionHandler:](../cssearchableindex/deletesearchableitems%28withdomainidentifiers_completionhandler_%29.md) with a [domainIdentifier](domainidentifier.md) of `<account-id>.<mailbox-id>`. Or to delete all items associated with all mailboxes in the specified account, you can call [deleteSearchableItemsWithDomainIdentifiers:completionHandler:](../cssearchableindex/deletesearchableitems%28withdomainidentifiers_completionhandler_%29.md) with a [domainIdentifier](domainidentifier.md) of `<account-id>`.

## See Also

### Setting attributes on a searchable item

- [uniqueIdentifier](uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [attributeSet](attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.
- [expirationDate](expirationdate.md): The date after which the searchable item should no longer exist.
- [isUpdate](isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [updateListenerOptions](updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
- [CSSearchableItemUpdateListenerOptions](updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.
