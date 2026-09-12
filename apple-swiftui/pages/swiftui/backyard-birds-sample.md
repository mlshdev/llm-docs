> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/backyard-birds-sample](https://developer.apple.com/documentation/swiftui/backyard-birds-sample)

# Backyard Birds: Building an app with SwiftData and widgets (Swift)

**Framework:** SwiftUI  
**Kind:** Sample Code  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · watchOS 10.2+ · Xcode 15.1+

Create an app with persistent data, interactive widgets, and an all new in-app purchase experience.

<a id="Overview"></a>

## Overview

Backyard Birds offers a rich environment in which you can watch the birds that visit your backyard garden. You can monitor their water and food supply to ensure they always have fresh water and plenty to eat, or upgrade the game using an in-app purchase to provide tastier food for the birds to eat.

The sample implements its data model using [SwiftData](https://developer.apple.com/documentation/swiftdata) for persistence, and integrates seamlessly with SwiftUI using the [`Observable`](https://developer.apple.com/documentation/observation) protocol. The game’s widgets implement [App Intents](https://developer.apple.com/documentation/appintents) for interactive and configurable widgets. The in-app purchase experience uses the [`ProductView`](https://developer.apple.com/documentation/storekit/productview) and [`SubscriptionStoreView`](https://developer.apple.com/documentation/storekit/subscriptionstoreview) from StoreKit.

You can access the source code for this sample on [GitHub](https://github.com/apple/sample-backyard-birds).

> **Note**

> This sample code project is associated with WWDC23 session 102: [State of the Union](https://developer.apple.com/wwdc23/102/).

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

To configure the Backyard Birds app to run on your devices, follow these steps:

1. Open the project in Xcode 15 or later.
2. Edit the multiplatform target’s scheme, and on the Options tab, choose the `Store.storekit` file for StoreKit configuration.
3. Repeat the previous step for the watchOS target’s scheme.
4. Select the top-level Backyard Birds project.
5. For all targets, choose your team from the Team menu in the Signing & Capabilities pane so Xcode can automatically manage your provisioning profile.

<a id="Create-a-data-driven-app"></a>

### Create a data-driven app

The app defines its data model by conforming the model objects to [`PersistentModel`](https://developer.apple.com/documentation/swiftdata/persistentmodel) using the [`Model`](https://developer.apple.com/documentation/swiftdata/model%28%29) macro. Using the [`Attribute`](https://developer.apple.com/documentation/swiftdata/attribute%28_:originalname:hashmodifier:%29) macro with the [`unique`](https://developer.apple.com/documentation/swiftdata/schema/attribute/option/unique) option ensures that the `id` property is unique.

```swift
@Model public class BirdSpecies {
    @Attribute(.unique) public var id: String
    public var naturalScale: Double
    public var isEarlyAccess: Bool
    public var parts: [BirdPart]
    
    @Relationship(deleteRule: .cascade, inverse: \Bird.species)
    public var birds: [Bird] = []
    
    public var info: BirdSpeciesInfo { BirdSpeciesInfo(rawValue: id) }
    
    public init(info: BirdSpeciesInfo, naturalScale: Double = 1, isEarlyAccess: Bool = false, parts: [BirdPart]) {
        self.id = info.rawValue
        self.naturalScale = naturalScale
        self.isEarlyAccess = isEarlyAccess
        self.parts = parts
    }
}
```

<a id="Construct-interactive-widgets"></a>

### Construct interactive widgets

Backyard Birds displays interactive widgets by presenting a [Button](button.md) to refill a backyard’s supplies when the water and food are running low. The app does this by placing a `Button` in the widget’s view, and passing a `ResupplyBackyardIntent` instance to the [`init(intent:label:)`](button/init%28intent_label_%29.md) initializer:

```swift
Button(intent: ResupplyBackyardIntent(backyard: BackyardEntity(from: snapshot.backyard))) {
    Label("Refill Water", systemImage: "arrow.clockwise")
        .foregroundStyle(.secondary)
        .frame(maxWidth: .infinity)
        .padding(.vertical, 8)
        .padding(.horizontal, 12)
        .background(.quaternary, in: .containerRelative)
}
```

The app allows for configuration of the widget by implementing the [`WidgetConfigurationIntent`](https://developer.apple.com/documentation/appintents/widgetconfigurationintent) protocol:

```swift
struct BackyardWidgetIntent: WidgetConfigurationIntent {
    static let title: LocalizedStringResource = "Backyard"
    static let description = IntentDescription("Keep track of your backyards.")
    
    @Parameter(title: "Backyards", default: BackyardWidgetContent.all)
    var backyards: BackyardWidgetContent
    
    @Parameter(title: "Backyard")
    var specificBackyard: BackyardEntity?
    
    init(backyards: BackyardWidgetContent = .all, specificBackyard: BackyardEntity? = nil) {
        self.backyards = backyards
        self.specificBackyard = specificBackyard
    }
    
    init() {
    }
    
    static var parameterSummary: some ParameterSummary {
        When(\.$backyards, .equalTo, BackyardWidgetContent.specific) {
            Summary {
                \.$backyards
                \.$specificBackyard
            }
        } otherwise: {
            Summary {
                \.$backyards
            }
        }
    }
}
```

<a id="Provide-a-new-in-app-purchase-experience"></a>

### Provide a new in-app purchase experience

The sample app uses [`ProductView`](https://developer.apple.com/documentation/storekit/productview) to display several different bird food upgrades available for purchase on a store shelf. To prominently feature an in-app purchase item, the app uses the [`.productViewStyle(.large)`](view/productviewstyle%28__%29.md) modifier:

```swift
ProductView(id: product.id) {
    BirdFoodProductIcon(birdFood: birdFood, quantity: product.quantity)
        .bestBirdFoodValueBadge()
}
.padding(.vertical)
.background(.background.secondary, in: .rect(cornerRadius: 20))
.productViewStyle(.large)
```

The Backyard Birds Pass page displays renewable subscriptions using the [`SubscriptionStoreView`](https://developer.apple.com/documentation/storekit/subscriptionstoreview) view. The app uses the `PassMarketingContent` view as the content of the `SubscriptionStoreView`:

```swift
SubscriptionStoreView(
    groupID: passGroupID,
    visibleRelationships: showPremiumUpgrade ? .upgrade : .all
) {
    PassMarketingContent(showPremiumUpgrade: showPremiumUpgrade)
        #if !os(watchOS)
        .containerBackground(for: .subscriptionStoreFullHeight) {
            SkyBackground()
        }
        #endif
}
```

## See Also

### Creating an app

- [Destination Video](https://developer.apple.com/documentation/visionos/destination-video): Leverage SwiftUI to build an immersive media experience in a multiplatform app.
- [Hello World](https://developer.apple.com/documentation/visionos/world): Use windows, volumes, and immersive spaces to teach people about the Earth.
- [Food Truck: Building a SwiftUI multiplatform app](food-truck-building-a-swiftui-multiplatform-app.md): Create a single codebase and app target for Mac, iPad, and iPhone.
- [Fruta: Building a feature-rich app with SwiftUI](https://developer.apple.com/documentation/appclip/fruta-building-a-feature-rich-app-with-swiftui): Create a shared codebase to build a multiplatform app that offers widgets and an App Clip.
- [Migrating to the SwiftUI life cycle](migrating-to-the-swiftui-life-cycle.md): Use a scene-based life cycle in SwiftUI while keeping your existing codebase.
- [App](app.md): A type that represents the structure and behavior of an app.

# Backyard Birds: Building an app with SwiftData and widgets (Objective-C)

**Framework:** SwiftUI  
**Kind:** Sample Code  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · watchOS 10.2+ · Xcode 15.1+

Create an app with persistent data, interactive widgets, and an all new in-app purchase experience.

<a id="Overview"></a>

## Overview

Backyard Birds offers a rich environment in which you can watch the birds that visit your backyard garden. You can monitor their water and food supply to ensure they always have fresh water and plenty to eat, or upgrade the game using an in-app purchase to provide tastier food for the birds to eat.

The sample implements its data model using [SwiftData](https://developer.apple.com/documentation/swiftdata) for persistence, and integrates seamlessly with SwiftUI using the [`Observable`](https://developer.apple.com/documentation/observation) protocol. The game’s widgets implement [App Intents](https://developer.apple.com/documentation/appintents) for interactive and configurable widgets. The in-app purchase experience uses the [`ProductView`](https://developer.apple.com/documentation/storekit/productview) and [`SubscriptionStoreView`](https://developer.apple.com/documentation/storekit/subscriptionstoreview) from StoreKit.

You can access the source code for this sample on [GitHub](https://github.com/apple/sample-backyard-birds).

> **Note**

> This sample code project is associated with WWDC23 session 102: [State of the Union](https://developer.apple.com/wwdc23/102/).

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

To configure the Backyard Birds app to run on your devices, follow these steps:

1. Open the project in Xcode 15 or later.
2. Edit the multiplatform target’s scheme, and on the Options tab, choose the `Store.storekit` file for StoreKit configuration.
3. Repeat the previous step for the watchOS target’s scheme.
4. Select the top-level Backyard Birds project.
5. For all targets, choose your team from the Team menu in the Signing & Capabilities pane so Xcode can automatically manage your provisioning profile.

<a id="Create-a-data-driven-app"></a>

### Create a data-driven app

The app defines its data model by conforming the model objects to [`PersistentModel`](https://developer.apple.com/documentation/swiftdata/persistentmodel) using the [`Model`](https://developer.apple.com/documentation/swiftdata/model%28%29) macro. Using the [`Attribute`](https://developer.apple.com/documentation/swiftdata/attribute%28_:originalname:hashmodifier:%29) macro with the [`unique`](https://developer.apple.com/documentation/swiftdata/schema/attribute/option/unique) option ensures that the `id` property is unique.

```swift
@Model public class BirdSpecies {
    @Attribute(.unique) public var id: String
    public var naturalScale: Double
    public var isEarlyAccess: Bool
    public var parts: [BirdPart]
    
    @Relationship(deleteRule: .cascade, inverse: \Bird.species)
    public var birds: [Bird] = []
    
    public var info: BirdSpeciesInfo { BirdSpeciesInfo(rawValue: id) }
    
    public init(info: BirdSpeciesInfo, naturalScale: Double = 1, isEarlyAccess: Bool = false, parts: [BirdPart]) {
        self.id = info.rawValue
        self.naturalScale = naturalScale
        self.isEarlyAccess = isEarlyAccess
        self.parts = parts
    }
}
```

<a id="Construct-interactive-widgets"></a>

### Construct interactive widgets

Backyard Birds displays interactive widgets by presenting a [Button](button.md) to refill a backyard’s supplies when the water and food are running low. The app does this by placing a `Button` in the widget’s view, and passing a `ResupplyBackyardIntent` instance to the [`init(intent:label:)`](button/init%28intent_label_%29.md) initializer:

```swift
Button(intent: ResupplyBackyardIntent(backyard: BackyardEntity(from: snapshot.backyard))) {
    Label("Refill Water", systemImage: "arrow.clockwise")
        .foregroundStyle(.secondary)
        .frame(maxWidth: .infinity)
        .padding(.vertical, 8)
        .padding(.horizontal, 12)
        .background(.quaternary, in: .containerRelative)
}
```

The app allows for configuration of the widget by implementing the [`WidgetConfigurationIntent`](https://developer.apple.com/documentation/appintents/widgetconfigurationintent) protocol:

```swift
struct BackyardWidgetIntent: WidgetConfigurationIntent {
    static let title: LocalizedStringResource = "Backyard"
    static let description = IntentDescription("Keep track of your backyards.")
    
    @Parameter(title: "Backyards", default: BackyardWidgetContent.all)
    var backyards: BackyardWidgetContent
    
    @Parameter(title: "Backyard")
    var specificBackyard: BackyardEntity?
    
    init(backyards: BackyardWidgetContent = .all, specificBackyard: BackyardEntity? = nil) {
        self.backyards = backyards
        self.specificBackyard = specificBackyard
    }
    
    init() {
    }
    
    static var parameterSummary: some ParameterSummary {
        When(\.$backyards, .equalTo, BackyardWidgetContent.specific) {
            Summary {
                \.$backyards
                \.$specificBackyard
            }
        } otherwise: {
            Summary {
                \.$backyards
            }
        }
    }
}
```

<a id="Provide-a-new-in-app-purchase-experience"></a>

### Provide a new in-app purchase experience

The sample app uses [`ProductView`](https://developer.apple.com/documentation/storekit/productview) to display several different bird food upgrades available for purchase on a store shelf. To prominently feature an in-app purchase item, the app uses the [`.productViewStyle(.large)`](view/productviewstyle%28__%29.md) modifier:

```swift
ProductView(id: product.id) {
    BirdFoodProductIcon(birdFood: birdFood, quantity: product.quantity)
        .bestBirdFoodValueBadge()
}
.padding(.vertical)
.background(.background.secondary, in: .rect(cornerRadius: 20))
.productViewStyle(.large)
```

The Backyard Birds Pass page displays renewable subscriptions using the [`SubscriptionStoreView`](https://developer.apple.com/documentation/storekit/subscriptionstoreview) view. The app uses the `PassMarketingContent` view as the content of the `SubscriptionStoreView`:

```swift
SubscriptionStoreView(
    groupID: passGroupID,
    visibleRelationships: showPremiumUpgrade ? .upgrade : .all
) {
    PassMarketingContent(showPremiumUpgrade: showPremiumUpgrade)
        #if !os(watchOS)
        .containerBackground(for: .subscriptionStoreFullHeight) {
            SkyBackground()
        }
        #endif
}
```

## See Also

### Creating an app

- [Food Truck: Building a SwiftUI multiplatform app](food-truck-building-a-swiftui-multiplatform-app.md): Create a single codebase and app target for Mac, iPad, and iPhone.
