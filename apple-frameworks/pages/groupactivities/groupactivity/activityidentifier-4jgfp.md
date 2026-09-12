> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivity/activityidentifier-4jgfp](https://developer.apple.com/documentation/groupactivities/groupactivity/activityidentifier-4jgfp)

# activityIdentifier

**Framework:** Group Activities  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An app-defined string that uniquely identifies the activity.

## Declaration

```swift
static var activityIdentifier: String { get }
```

<a id="discussion"></a>

## Discussion

Implement this property and return a value that uniquely identifies the activity within your app. An app may support multiple activities, and each activity requires a unique identifier string. If you specify a custom string, include your company name in reverse-DNS format, along with any other information needed to distinguish the activity from others in your app. The following code adds a custom identifier for the `WatchTogether` activity:

```swift
struct WatchTogether: GroupActivity, Transferable {
    // Specify the activity type to the system.
    static let activityIdentifier = "com.mycompany.myapp.watch-movie-together"

    // The movie to watch together.
    var movie: Movie

    init(movie: Movie) {
        self.movie = movie
    }
}
```

If you don’t implement this property yourself, the default implementation composes an activity identifier using your app’s bundle identifier and the current class or struct name. For example, if the app’s bundle identifier is `"com.mycompany.myapp"` and your activity type name is `WatchTogether`, the resulting identifier string is `"com.mycompany.myapp.WatchTogether"`.

Make activity identifiers as granular as needed to differentiate the activities within your app. Don’t create one activity type that serves multiple purposes. Instead, define separate types and give them unique activity identifiers. For example, if your video player supports playing both movies and television shows, create separate activities for each.
