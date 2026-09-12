> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontextgroupcreate()](https://developer.apple.com/documentation/javascriptcore/jscontextgroupcreate())

# JSContextGroupCreate() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript context group.

## Declaration

```swift
func JSContextGroupCreate() -> JSContextGroupRef!
```

<a id="return-value"></a>

## Return Value

The created [JSContextGroupRef](jscontextgroupref.md).

<a id="Discussion"></a>

## Discussion

A [JSContextGroupRef](jscontextgroupref.md) associates JavaScript contexts with one another. Contexts in the same group may share and exchange JavaScript objects. Sharing and exchanging JavaScript objects between contexts in different groups produces undefined behavior. When you use objects from the same context group in multiple threads, explicit synchronization is a requirement.

## See Also

### Creating a Context Group

- [JSContextGroupRetain(\_:)](jscontextgroupretain%28__%29.md): Retains a JavaScript context group.
- [JSContextGroupRelease(\_:)](jscontextgrouprelease%28__%29.md): Releases a JavaScript context group.

# JSContextGroupCreate (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript context group.

## Declaration

```objectivec
JSContextGroupRefJSContextGroupCreate();
```

<a id="return-value"></a>

## Return Value

The created [JSContextGroupRef](jscontextgroupref.md).

<a id="Discussion"></a>

## Discussion

A [JSContextGroupRef](jscontextgroupref.md) associates JavaScript contexts with one another. Contexts in the same group may share and exchange JavaScript objects. Sharing and exchanging JavaScript objects between contexts in different groups produces undefined behavior. When you use objects from the same context group in multiple threads, explicit synchronization is a requirement.

## See Also

### Creating a Context Group

- [JSContextGroupRetain](jscontextgroupretain%28__%29.md): Retains a JavaScript context group.
- [JSContextGroupRelease](jscontextgrouprelease%28__%29.md): Releases a JavaScript context group.
