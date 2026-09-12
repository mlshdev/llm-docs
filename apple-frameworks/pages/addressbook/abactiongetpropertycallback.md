> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abactiongetpropertycallback](https://developer.apple.com/documentation/addressbook/abactiongetpropertycallback)

# ABActionGetPropertyCallback

**Interface language:** Objective-C

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** macOS

Return the property the action applies to.

## Declaration

```objectivec
typedef const struct __CFString *(*)(void) ABActionGetPropertyCallback;
```

## See Also

### Callbacks

- [ABImageClientCallback](abimageclientcallback.md): Prototype of a callback function used to notify an application when an asynchronous image fetch is complete.
- [ABActionCopyTitleCallback](abactioncopytitlecallback.md): The title of the menu item for the action.
- [ABActionEnabledCallback](abactionenabledcallback.md): Return `true` ifthe action menu item should be enabled, `false` otherwise.If the property returned by `ABActionGetPropertyCallback` isa multi-value property, `identifier` contains theunique identifier of the value selected.
- [ABActionSelectedCallback](abactionselectedcallback.md): Execute the action. If the property returnedby [ABActionGetPropertyCallback](abactiongetpropertycallback.md) isa multi-value property, `identifier` containsthe unique identifier of the value selected; otherwise, identifieris `NULL`.
