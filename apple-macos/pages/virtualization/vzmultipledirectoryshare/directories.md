> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmultipledirectoryshare/directories](https://developer.apple.com/documentation/virtualization/vzmultipledirectoryshare/directories)

# directories (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The directories on the host to expose to the guest.

## Declaration

```swift
var directories: [String : VZSharedDirectory] { get }
```

<a id="Discussion"></a>

## Discussion

The dictionary string keys are the names for the directory. The keys must be valid names or the system raises an exception.

## See Also

### Related Documentation

- [validateName(\_:)](validatename%28__%29.md): Check if a name is a valid directory name.

# directories (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The directories on the host to expose to the guest.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,VZSharedDirectory *> * directories;
```

<a id="Discussion"></a>

## Discussion

The dictionary string keys are the names for the directory. The keys must be valid names or the system raises an exception.

## See Also

### Related Documentation

- [validateName:error:](validatename%28__%29.md): Check if a name is a valid directory name.
