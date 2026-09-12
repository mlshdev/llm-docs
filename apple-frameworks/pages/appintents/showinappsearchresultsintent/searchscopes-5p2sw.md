> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/showinappsearchresultsintent/searchscopes-5p2sw](https://developer.apple.com/documentation/appintents/showinappsearchresultsintent/searchscopes-5p2sw)

# searchScopes

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

A default value that helps the system understand the scope of an app intent that shows the results of a string-based search.

## Declaration

```swift
@backDeployed(before: macOS 15.0, iOS 18.0, watchOS 11.0, tvOS 18.0, visionOS 2.0)
static var searchScopes: [StringSearchScope] { get }
```

<a id="discussion"></a>

## Discussion

If you don’t provide a search scope for your [ShowInAppSearchResultsIntent](../showinappsearchresultsintent.md), the system uses [StringSearchScope.general](../stringsearchscope/general.md) as the default value.
