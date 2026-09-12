> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/openurlaction](https://developer.apple.com/documentation/swiftui/openurlaction)

# OpenURLAction

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An action that opens a URL.

## Declaration

```swift
@MainActor @preconcurrency struct OpenURLAction
```

<a id="overview"></a>

## Overview

Read the [openURL](environmentvalues/openurl.md) environment value to get an instance of this structure for a given [Environment](environment.md). Call the instance to open a URL. You call the instance directly because it defines a [callAsFunction(\_:)](openurlaction/callasfunction%28__%29.md) method that Swift calls when you call the instance.

For example, you can open a web site when the user taps a button:

```swift
struct OpenURLExample: View {
    @Environment(\.openURL) private var openURL

    var body: some View {
        Button {
            if let url = URL(string: "https://www.example.com") {
                openURL(url)
            }
        } label: {
            Label("Get Help", systemImage: "person.fill.questionmark")
        }
    }
}
```

If you want to know whether the action succeeds, add a completion handler that takes a Boolean value. In this case, Swift implicitly calls the [callAsFunction(\_:completion:)](openurlaction/callasfunction%28__completion_%29.md) method instead. That method calls your completion handler after it determines whether it can open the URL, but possibly before it finishes opening the URL. You can add a handler to the example above so that it prints the outcome to the console:

```swift
openURL(url) { accepted in
    print(accepted ? "Success" : "Failure")
}
```

The system provides a default open URL action with behavior that depends on the contents of the URL. For example, the default action opens a Universal Link in the associated app if possible, or in the user’s default web browser if not.

You can also set a custom action using the [environment(\_:\_:)](view/environment%28____%29.md) view modifier. Any views that read the action from the environment, including the built-in [Link](link.md) view and [Text](text.md) views with markdown links, or links in attributed strings, use your action. Initialize an action by calling the [init(handler:)](openurlaction/init%28handler_%29.md) initializer with a handler that takes a URL and returns an [OpenURLAction.Result](openurlaction/result.md):

```swift
Text("Visit [Example Company](https://www.example.com) for details.")
    .environment(\.openURL, OpenURLAction { url in
        handleURL(url) // Define this method to take appropriate action.
        return .handled
    })
```

SwiftUI translates the value that your custom action’s handler returns into an appropriate Boolean result for the action call. For example, a view that uses the action declared above receives `true` when calling the action, because the handler always returns [handled](openurlaction/result/handled.md).

## Topics

### Creating the action

- [init(handler:)](openurlaction/init%28handler_%29.md): Creates an action that opens a URL.
- [OpenURLAction.Result](openurlaction/result.md): The result of a custom open URL action.

### Calling the action

- [callAsFunction(\_:)](openurlaction/callasfunction%28__%29.md): Opens a URL, following system conventions.
- [callAsFunction(\_:completion:)](openurlaction/callasfunction%28__completion_%29.md): Asynchronously opens a URL, following system conventions.

### Instance Methods

- [callAsFunction(\_:prefersInApp:)](openurlaction/callasfunction%28__prefersinapp_%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending and receiving URLs

- [openURL](environmentvalues/openurl.md): An action that opens a URL.
- [onOpenURL(perform:)](view/onopenurl%28perform_%29.md): Registers a handler to invoke in response to a URL that your app receives.
