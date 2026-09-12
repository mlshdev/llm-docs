> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/visibility/computer](https://developer.apple.com/documentation/appkit/nsfontcollection/visibility/computer)

# computer (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The font collection is visible to all users and is stored persistently.

## Declaration

```swift
static var computer: NSFontCollection.Visibility { get }
```

## See Also

### Visibility Options

- [process](process.md): The font collection is visible within this process and is not persistent.
- [user](user.md): The font collection is visible to all processes and is stored persistently.

# NSFontCollectionVisibilityComputer (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The font collection is visible to all users and is stored persistently.

## Declaration

```objectivec
NSFontCollectionVisibilityComputer
```

## See Also

### Visibility Options

- [NSFontCollectionVisibilityProcess](process.md): The font collection is visible within this process and is not persistent.
- [NSFontCollectionVisibilityUser](user.md): The font collection is visible to all processes and is stored persistently.
