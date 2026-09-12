> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquery/prepare()](https://developer.apple.com/documentation/corespotlight/csuserquery/prepare())

# prepare() (Swift)

**Framework:** Core Spotlight  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Performs one-time tasks that prepare Spotlight to search for content in all search indexes.

## Declaration

```swift
class func prepare()
```

## Mentioned In

- [Building a search interface for your app](../building-a-search-interface-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Call this method once during your app’s lifecycle to give Spotlight time to load the resources it needs for search. This preparation comes at a cost, so measure your app’s performance and determine an appropriate time to call it. For example, you might call it when you load an interface that includes search features.

You don’t need to call this method more than once during the lifetime of your app, but it’s safe to call the method multiple times.

## See Also

### Preparing to search

- [prepareProtectionClasses(\_:)](prepareprotectionclasses%28__%29.md): Performs one-time tasks that prepare Spotlight to search for content in one or more protected search indexes.

# prepare (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Performs one-time tasks that prepare Spotlight to search for content in all search indexes.

## Declaration

```objectivec
+ (void) prepare;
```

## Mentioned In

- [Building a search interface for your app](../building-a-search-interface-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Call this method once during your app’s lifecycle to give Spotlight time to load the resources it needs for search. This preparation comes at a cost, so measure your app’s performance and determine an appropriate time to call it. For example, you might call it when you load an interface that includes search features.

You don’t need to call this method more than once during the lifetime of your app, but it’s safe to call the method multiple times.

## See Also

### Preparing to search

- [prepareProtectionClasses:](prepareprotectionclasses%28__%29.md): Performs one-time tasks that prepare Spotlight to search for content in one or more protected search indexes.
