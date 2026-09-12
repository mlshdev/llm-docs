> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1427034-mditemcreatewithurl](https://developer.apple.com/documentation/coreservices/1427034-mditemcreatewithurl)

# MDItemCreateWithURL(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.6+

Creates an MDItem object for a file at the specified file URL.

## Declaration

```swift
func MDItemCreateWithURL(_ allocator: CFAllocator!, _ url: CFURL!) -> MDItem!
```

## Parameters

- `allocator`: The `CFAllocator` object to be used to allocate memory for the new object. Pass `NULL` or `kCFAllocatorDefault` to use the current default allocator.
- `url`: A file URL to the file from which to create the `MDItem`. The file must exist.

<a id="return_value"></a>

## Return Value

An `MDItem` object or `NULL` if there was a problem creating the object.

<a id="discussion"></a>

## Discussion

Returns a metadata item for the given URL.

<a id="1675371"></a>

### Special Considerations

In macOS 10.5 and later MDItemRefs may or may not be uniqued. You should always use `CFEqual` for comparison. 

Prior to OS X v 10.5 items were guaranteed to be unique and == could or `CFEqual` could be used for the comparison.

## See Also

### Creating an MDItem

- [MDItemCreate(\_:\_:)](1426917-mditemcreate.md): Creates an MDItem object for a file at the specified path.

# MDItemCreateWithURL (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.6+

Creates an MDItem object for a file at the specified file URL.

## Declaration

```objectivec
MDItemRef MDItemCreateWithURL(CFAllocatorRef allocator, CFURLRef url);
```

## Parameters

- `allocator`: The `CFAllocator` object to be used to allocate memory for the new object. Pass `NULL` or `kCFAllocatorDefault` to use the current default allocator.
- `url`: A file URL to the file from which to create the `MDItem`. The file must exist.

<a id="return_value"></a>

## Return Value

An `MDItem` object or `NULL` if there was a problem creating the object.

<a id="discussion"></a>

## Discussion

Returns a metadata item for the given URL.

<a id="1675371"></a>

### Special Considerations

In macOS 10.5 and later MDItemRefs may or may not be uniqued. You should always use `CFEqual` for comparison. 

Prior to OS X v 10.5 items were guaranteed to be unique and == could or `CFEqual` could be used for the comparison.

## See Also

### Creating an MDItem

- [MDItemCreate](1426917-mditemcreate.md): Creates an MDItem object for a file at the specified path.
