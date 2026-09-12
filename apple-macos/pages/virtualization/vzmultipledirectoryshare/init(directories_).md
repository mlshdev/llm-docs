> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmultipledirectoryshare/init(directories:)](https://developer.apple.com/documentation/virtualization/vzmultipledirectoryshare/init(directories:))

# init(directories:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates the directory share with a set of directories on the host.

## Declaration

```swift
init(directories: [String : VZSharedDirectory])
```

## Parameters

- `directories`: Directories on the host to expose to the guest VM by name.

<a id="Discussion"></a>

## Discussion

The dictionary string keys are the names for the directory. The keys must be valid names or the system raises an exception and the app exits.

## See Also

### Related Documentation

- [validateName(\_:)](validatename%28__%29.md): Check if a name is a valid directory name.

### Creating a directory share

- [init()](init%28%29.md): Initializes the directory share with an empty set of directories.

# initWithDirectories: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates the directory share with a set of directories on the host.

## Declaration

```objectivec
- (instancetype) initWithDirectories:(NSDictionary<NSString *,VZSharedDirectory *> *) directories;
```

## Parameters

- `directories`: Directories on the host to expose to the guest VM by name.

<a id="Discussion"></a>

## Discussion

The dictionary string keys are the names for the directory. The keys must be valid names or the system raises an exception and the app exits.

## See Also

### Related Documentation

- [validateName:error:](validatename%28__%29.md): Check if a name is a valid directory name.

### Creating a directory share

- [init](init%28%29.md): Initializes the directory share with an empty set of directories.
