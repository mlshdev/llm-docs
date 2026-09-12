> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/visibility/process](https://developer.apple.com/documentation/appkit/nsfontcollection/visibility/process)

# process (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The font collection is visible within this process and is not persistent.

## Declaration

```swift
static var process: NSFontCollection.Visibility { get }
```

## See Also

### Visibility Options

- [user](user.md): The font collection is visible to all processes and is stored persistently.
- [computer](computer.md): The font collection is visible to all users and is stored persistently.

# NSFontCollectionVisibilityProcess (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The font collection is visible within this process and is not persistent.

## Declaration

```objectivec
NSFontCollectionVisibilityProcess
```

## See Also

### Visibility Options

- [NSFontCollectionVisibilityUser](user.md): The font collection is visible to all processes and is stored persistently.
- [NSFontCollectionVisibilityComputer](computer.md): The font collection is visible to all users and is stored persistently.
