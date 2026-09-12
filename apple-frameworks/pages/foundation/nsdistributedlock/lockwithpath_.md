> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistributedlock/lockwithpath:](https://developer.apple.com/documentation/foundation/nsdistributedlock/lockwithpath:)

# lockWithPath:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSDistributedLock` object initialized to use as the locking object the file-system entry specified by a given path.

## Declaration

```objectivec
+ (NSDistributedLock *) lockWithPath:(NSString *) path;
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

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)

### Creating an NSDistributedLock

- [initWithPath:](init%28path_%29.md): Initializes an `NSDistributedLock` object to use as the lock the file-system entry specified by a given path.
