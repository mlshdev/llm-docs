> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/save()](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/save())

# save() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Saves all the changes made since the last save.

## Declaration

```swift
func save() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful or there were no changes; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Saving and Detecting Changes

- [hasUnsavedChanges()](hasunsavedchanges%28%29.md): Indicates whether an address book has changes that have not been saved to the Address Book database.
- [saveAndReturnError()](saveandreturnerror%28%29.md): Saves all the changes made since the last save.

# save (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Saves all the changes made since the last save.

## Declaration

```objectivec
- (BOOL) save;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful or there were no changes; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Saving and Detecting Changes

- [hasUnsavedChanges](hasunsavedchanges%28%29.md): Indicates whether an address book has changes that have not been saved to the Address Book database.
- [saveAndReturnError:](saveandreturnerror%28%29.md): Saves all the changes made since the last save.
