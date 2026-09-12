> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lssharedfilelistref](https://developer.apple.com/documentation/coreservices/lssharedfilelistref)

# LSSharedFileListRef

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 16.0+ · macOS 10.5+

A persistent list of file-system objects.

## Declaration

```objectivec
typedef struct OpaqueLSSharedFileListRef *LSSharedFileListRef;
```

## See Also

### Opening Items

- [LSOpenCFURLRef](1442850-lsopencfurlref.md): Opens an item for a URL in the default manner in its preferred app.
- [LSOpenFromURLSpec](1441986-lsopenfromurlspec.md): Opens one or more items for a URL in the preferred apps or a designated app.
- [LSLaunchURLSpec](lslaunchurlspec.md): The specification for launching an app, opening items, or both, along with related information.
- [LSSharedFileListItemRef](lssharedfilelistitemref.md): A file-system object in the shared file list.
