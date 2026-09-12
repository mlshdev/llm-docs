> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/name](https://developer.apple.com/documentation/uikit/uigesturerecognizer/name)

# name (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The unique name of the gesture recognizer.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign a string to this property that uniquely identifies the gesture recognizer. Use this name to distinguish one gesture recognizer from another during debugging, or to specify a relationship between gestures in SwiftUI and UIKit.

For example, you can assign a SwiftUI gesture a name when you create it using [gesture(\_:name:isEnabled:)](https://developer.apple.com/documentation/swiftui/view/gesture%28_:name:isenabled:%29), as the following code shows:

```swift
// SwiftUI code
struct TapGestureView: View {
    @State private var tapLocation: CGPoint = .zero

    var tap: some Gesture {
        DragGesture(minimumDistance: 0, coordinateSpace: .local)
            .onEnded { event in
                tapLocation = event.location
            }
    }

    var body: some View {
        Text("Tap location: \(tapLocation.debugDescription)")
            .frame(width: 120, height: 120)
            .background(Color.gray)
            .gesture(tap, name: "MyTap")
    }
}
```

Then, you can use this [name](name.md) property to refer to the gesture from UIKit. For example, you might do this in your implementation of [gestureRecognizer(\_:shouldRequireFailureOf:)](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldrequirefailureof_%29.md), as the following code shows:

```swift
// UIKit code
class ViewController: UIViewController, UIGestureRecognizerDelegate {  
 
    func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, 
        shouldRequireFailureOf other: UIGestureRecognizer) -> Bool {
        return other.name == "MyTap"
    }

    // ...
}
```

# name (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The unique name of the gesture recognizer.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Assign a string to this property that uniquely identifies the gesture recognizer. Use this name to distinguish one gesture recognizer from another during debugging, or to specify a relationship between gestures in SwiftUI and UIKit.

For example, you can assign a SwiftUI gesture a name when you create it using [gesture(\_:name:isEnabled:)](https://developer.apple.com/documentation/swiftui/view/gesture%28_:name:isenabled:%29), as the following code shows:

```swift
// SwiftUI code
struct TapGestureView: View {
    @State private var tapLocation: CGPoint = .zero

    var tap: some Gesture {
        DragGesture(minimumDistance: 0, coordinateSpace: .local)
            .onEnded { event in
                tapLocation = event.location
            }
    }

    var body: some View {
        Text("Tap location: \(tapLocation.debugDescription)")
            .frame(width: 120, height: 120)
            .background(Color.gray)
            .gesture(tap, name: "MyTap")
    }
}
```

Then, you can use this [name](name.md) property to refer to the gesture from UIKit. For example, you might do this in your implementation of [gestureRecognizer:shouldRequireFailureOfGestureRecognizer:](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldrequirefailureof_%29.md), as the following code shows:

```swift
// UIKit code
class ViewController: UIViewController, UIGestureRecognizerDelegate {  
 
    func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, 
        shouldRequireFailureOf other: UIGestureRecognizer) -> Bool {
        return other.name == "MyTap"
    }

    // ...
}
```
