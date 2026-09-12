> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/rearrangeobjects()](https://developer.apple.com/documentation/appkit/nstreecontroller/rearrangeobjects())

# rearrangeObjects() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Use this method to trigger reordering of the tree controller’s content.

## Declaration

```swift
func rearrangeObjects()
```

<a id="Discussion"></a>

## Discussion

Subclasses should invoke this method if any parameter that affects the arranged objects changes.

## See Also

### Arranging Objects

- [arrangedObjects](arrangedobjects.md): The tree controller’s sorted content objects.

# rearrangeObjects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Use this method to trigger reordering of the tree controller’s content.

## Declaration

```objectivec
- (void) rearrangeObjects;
```

<a id="Discussion"></a>

## Discussion

Subclasses should invoke this method if any parameter that affects the arranged objects changes.

## See Also

### Arranging Objects

- [arrangedObjects](arrangedobjects.md): The tree controller’s sorted content objects.
