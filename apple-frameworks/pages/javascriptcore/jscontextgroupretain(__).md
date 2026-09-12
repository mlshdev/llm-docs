> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontextgroupretain(_:)](https://developer.apple.com/documentation/javascriptcore/jscontextgroupretain(_:))

# JSContextGroupRetain(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Retains a JavaScript context group.

## Declaration

```swift
func JSContextGroupRetain(_ group: JSContextGroupRef!) -> JSContextGroupRef!
```

## Parameters

- `group`: The [JSContextGroupRef](jscontextgroupref.md) to retain.

<a id="return-value"></a>

## Return Value

A [JSContextGroupRef](jscontextgroupref.md) that is the same as `group`.

## See Also

### Creating a Context Group

- [JSContextGroupCreate()](jscontextgroupcreate%28%29.md): Creates a JavaScript context group.
- [JSContextGroupRelease(\_:)](jscontextgrouprelease%28__%29.md): Releases a JavaScript context group.

# JSContextGroupRetain (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Retains a JavaScript context group.

## Declaration

```objectivec
JSContextGroupRefJSContextGroupRetain(JSContextGroupRef group);
```

## Parameters

- `group`: The [JSContextGroupRef](jscontextgroupref.md) to retain.

<a id="return-value"></a>

## Return Value

A [JSContextGroupRef](jscontextgroupref.md) that is the same as `group`.

## See Also

### Creating a Context Group

- [JSContextGroupCreate](jscontextgroupcreate%28%29.md): Creates a JavaScript context group.
- [JSContextGroupRelease](jscontextgrouprelease%28__%29.md): Releases a JavaScript context group.
