> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/hasunsavedchanges()](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/hasunsavedchanges())

# hasUnsavedChanges() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Indicates whether an address book has changes that have not been saved to the Address Book database.

## Declaration

```swift
func hasUnsavedChanges() -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if there are unsaved changes; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

The unsaved changes flag is set automatically whenever changes are made.

## See Also

### Saving and Detecting Changes

- [save()](save%28%29.md): Saves all the changes made since the last save.
- [saveAndReturnError()](saveandreturnerror%28%29.md): Saves all the changes made since the last save.

# hasUnsavedChanges (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Indicates whether an address book has changes that have not been saved to the Address Book database.

## Declaration

```objectivec
- (BOOL) hasUnsavedChanges;
```

<a id="return-value"></a>

## Return Value

`true` if there are unsaved changes; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

The unsaved changes flag is set automatically whenever changes are made.

## See Also

### Saving and Detecting Changes

- [save](save%28%29.md): Saves all the changes made since the last save.
- [saveAndReturnError:](saveandreturnerror%28%29.md): Saves all the changes made since the last save.
