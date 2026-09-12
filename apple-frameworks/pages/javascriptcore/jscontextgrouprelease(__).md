> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontextgrouprelease(_:)](https://developer.apple.com/documentation/javascriptcore/jscontextgrouprelease(_:))

# JSContextGroupRelease(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Releases a JavaScript context group.

## Declaration

```swift
func JSContextGroupRelease(_ group: JSContextGroupRef!)
```

## Parameters

- `group`: The [JSContextGroupRef](jscontextgroupref.md) to release.

## See Also

### Creating a Context Group

- [JSContextGroupCreate()](jscontextgroupcreate%28%29.md): Creates a JavaScript context group.
- [JSContextGroupRetain(\_:)](jscontextgroupretain%28__%29.md): Retains a JavaScript context group.

# JSContextGroupRelease (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Releases a JavaScript context group.

## Declaration

```objectivec
void JSContextGroupRelease(JSContextGroupRef group);
```

## Parameters

- `group`: The [JSContextGroupRef](jscontextgroupref.md) to release.

## See Also

### Creating a Context Group

- [JSContextGroupCreate](jscontextgroupcreate%28%29.md): Creates a JavaScript context group.
- [JSContextGroupRetain](jscontextgroupretain%28__%29.md): Retains a JavaScript context group.
