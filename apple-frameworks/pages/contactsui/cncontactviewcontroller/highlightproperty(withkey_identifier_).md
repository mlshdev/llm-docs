> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/highlightproperty(withkey:identifier:)

# highlightProperty(withKey:identifier:) (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Highlights the property of the contact being displayed.

## Declaration

```swift
func highlightProperty(withKey key: String, identifier: String?)
```

## Parameters

- `key`: Key of the property to highlight.
- `identifier`: `property` is a multivalue property, the value to highlight.

<a id="discussion"></a>

## Discussion

When a single value property key is specified, identifier will be ignored.

# highlightPropertyWithKey:identifier: (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Highlights the property of the contact being displayed.

## Declaration

```objectivec
- (void) highlightPropertyWithKey:(NSString *) key identifier:(NSString *) identifier;
```

## Parameters

- `key`: Key of the property to highlight.
- `identifier`: `property` is a multivalue property, the value to highlight.

<a id="discussion"></a>

## Discussion

When a single value property key is specified, identifier will be ignored.
