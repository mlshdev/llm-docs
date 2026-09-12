> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistributedlock/init(path:)](https://developer.apple.com/documentation/foundation/nsdistributedlock/init(path:))

# init(path:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes an `NSDistributedLock` object to use as the lock the file-system entry specified by a given path.

## Declaration

```swift
init?(path: String)
```

## Parameters

- `path`: All of `path` up to the last component itself must exist. You can use [FileManager](../filemanager.md) to create (and set permissions) for any nonexistent intermediate directories.

<a id="return-value"></a>

## Return Value

An `NSDistributedLock` object initialized to use as the locking object the file-system entry specified by `path`.

<a id="Discussion"></a>

## Discussion

For applications to use the lock, `path` must be accessible to—and writable by—all hosts on which the applications might be running.

# initWithPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes an `NSDistributedLock` object to use as the lock the file-system entry specified by a given path.

## Declaration

```objectivec
- (instancetype) initWithPath:(NSString *) path;
```

## Parameters

- `path`: All of `path` up to the last component itself must exist. You can use [NSFileManager](../filemanager.md) to create (and set permissions) for any nonexistent intermediate directories.

<a id="return-value"></a>

## Return Value

An `NSDistributedLock` object initialized to use as the locking object the file-system entry specified by `path`.

<a id="Discussion"></a>

## Discussion

For applications to use the lock, `path` must be accessible to—and writable by—all hosts on which the applications might be running.

## See Also

### Related Documentation

- [lockWithPath:](lockwithpath_.md): Returns an `NSDistributedLock` object initialized to use as the locking object the file-system entry specified by a given path.

### Creating an NSDistributedLock

- [lockWithPath:](lockwithpath_.md): Returns an `NSDistributedLock` object initialized to use as the locking object the file-system entry specified by a given path.
