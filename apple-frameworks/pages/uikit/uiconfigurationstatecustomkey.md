> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconfigurationstatecustomkey](https://developer.apple.com/documentation/uikit/uiconfigurationstatecustomkey)

# UIConfigurationStateCustomKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A key that defines a custom state for a view.

## Declaration

```swift
struct UIConfigurationStateCustomKey
```

<a id="overview"></a>

## Overview

Create a custom state key if you want to define a custom state to include in a configuration state.

**Swift**

```swift
// Declare a custom key for a custom isArchived state. 
extension UIConfigurationStateCustomKey {
    static let isArchived = UIConfigurationStateCustomKey("com.my-app.MyCell.isArchived")
}

// Declare an extension on the cell state structure to provide a typed property for this custom state.
extension UICellConfigurationState {
    var isArchived: Bool {
        get { return self[.isArchived] as? Bool ?? false } 
        set { self[.isArchived] = newValue }
    }
}

class MyCell: UICollectionViewCell {
    // This is an existing custom property of the cell.
    var isArchived: Bool { 
        didSet {
            // Ensure that an update is performed whenever this property changes.
            if oldValue != isArchived { 
                setNeedsUpdateConfiguration()
            }
        }
    }

    override var configurationState: UICellConfigurationState {
        // Get the structure from UIKit with the system properties set by calling super. 
        var state = super.configurationState

        // Set the custom property on the state.
        state.isArchived = self.isArchived 
        return state
    }

    override func updateConfiguration(using state: UICellConfigurationState) {
        // Get the default background configuration styling for the current state based on the system states.
        var backgroundConfig = UIBackgroundConfiguration.listPlainCell().updated(for: 
state)

        // Customize the background configuration based on the custom state. 
        if state.isArchived {
            backgroundConfig.visualEffect = UIBlurEffect(style: .systemMaterial) 
        }

        // Apply the background configuration to the cell.
        self.backgroundConfiguration = backgroundConfig 
    }
}
```

**Objective-C**

```objc
// Declare a custom key for a custom isArchived state (in the .h file). 
extern NSString* const UICONFIGURATIONSTATECUSTOMKEY_IS_ARCHIVED;

// Assign a value for the custom key for the custom isArchived state (in the .m file). 
NSString* const UICONFIGURATIONSTATECUSTOMKEY_IS_ARCHIVED = @"com.my-app.MyCell.isArchived";

// Declare a category on the cell state structure to provide a typed property for this custom state.
@interface UICellConfigurationState (MyCellAdditions)
- (BOOL)isArchived;
- (void)setIsArchived:(BOOL) isArchived;
@end

@implementation UICellConfigurationState (MyCellAdditions)
- (BOOL)isArchived {
    return [[self valueForKey:UICONFIGURATIONSTATECUSTOMKEY_IS_ARCHIVED] boolValue];
}

- (void)setIsArchived:(BOOL) isArchived {
    self[UICONFIGURATIONSTATECUSTOMKEY_IS_ARCHIVED] = @(isArchived);
}
@end

@interface MyCell : UICollectionViewCell
@property (nonatomic) BOOL isArchived;
@end

@implementation MyCell

// This is an existing custom property of the cell.
- (void)setIsArchived:(BOOL)isArchived {
    // Ensure that an update is performed whenever this property changes.
    if (isArchived != _isArchived) {
        _isArchived = isArchived;
        [self setNeedsUpdateConfiguration];
    }
}

- (UICellConfigurationState *)configurationState {
    // Get the structure from UIKit with the system properties set by calling super.
    UICellConfigurationState *state = [super configurationState];
    
    // Set the custom property on the state.
    [state setIsArchived: self.isArchived];
    return state;
}

- (void)updateConfigurationUsingState:(UICellConfigurationState *)state {
    // Get the default background configuration styling for the current state based on the system states.
    UIBackgroundConfiguration *backgroundConfig = [[UIBackgroundConfiguration listPlainCellConfiguration] updatedConfigurationForState:state];
    
    // Customize the background configuration based on the custom state.
    if (state.isArchived) {
        [backgroundConfig setVisualEffect:[UIBlurEffect effectWithStyle:UIBlurEffectStyleSystemMaterial]];
    }
    
    // Apply the background configuration to the cell.
    [self setBackgroundConfiguration:backgroundConfig];
}

@end
```

## Topics

### Creating a custom state key

- [init(\_:)](uiconfigurationstatecustomkey/init%28__%29.md): Creates a custom state key.
- [init(rawValue:)](uiconfigurationstatecustomkey/init%28rawvalue_%29.md): Creates a custom state key with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuration states

- [UIViewConfigurationState](uiviewconfigurationstate-swift.struct.md): A structure that encapsulates a view’s state.
- [UICellConfigurationState](uicellconfigurationstate-swift.struct.md): A structure that encapsulates a cell’s state.
- [UIConfigurationState](uiconfigurationstate-8d7pd.md): The requirements for an object that encapsulates a view’s state.

# UIConfigurationStateCustomKey (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A key that defines a custom state for a view.

## Declaration

```objectivec
typedef NSString * UIConfigurationStateCustomKey;
```

<a id="overview"></a>

## Overview

Create a custom state key if you want to define a custom state to include in a configuration state.

**Swift**

```swift
// Declare a custom key for a custom isArchived state. 
extension UIConfigurationStateCustomKey {
    static let isArchived = UIConfigurationStateCustomKey("com.my-app.MyCell.isArchived")
}

// Declare an extension on the cell state structure to provide a typed property for this custom state.
extension UICellConfigurationState {
    var isArchived: Bool {
        get { return self[.isArchived] as? Bool ?? false } 
        set { self[.isArchived] = newValue }
    }
}

class MyCell: UICollectionViewCell {
    // This is an existing custom property of the cell.
    var isArchived: Bool { 
        didSet {
            // Ensure that an update is performed whenever this property changes.
            if oldValue != isArchived { 
                setNeedsUpdateConfiguration()
            }
        }
    }

    override var configurationState: UICellConfigurationState {
        // Get the structure from UIKit with the system properties set by calling super. 
        var state = super.configurationState

        // Set the custom property on the state.
        state.isArchived = self.isArchived 
        return state
    }

    override func updateConfiguration(using state: UICellConfigurationState) {
        // Get the default background configuration styling for the current state based on the system states.
        var backgroundConfig = UIBackgroundConfiguration.listPlainCell().updated(for: 
state)

        // Customize the background configuration based on the custom state. 
        if state.isArchived {
            backgroundConfig.visualEffect = UIBlurEffect(style: .systemMaterial) 
        }

        // Apply the background configuration to the cell.
        self.backgroundConfiguration = backgroundConfig 
    }
}
```

**Objective-C**

```objc
// Declare a custom key for a custom isArchived state (in the .h file). 
extern NSString* const UICONFIGURATIONSTATECUSTOMKEY_IS_ARCHIVED;

// Assign a value for the custom key for the custom isArchived state (in the .m file). 
NSString* const UICONFIGURATIONSTATECUSTOMKEY_IS_ARCHIVED = @"com.my-app.MyCell.isArchived";

// Declare a category on the cell state structure to provide a typed property for this custom state.
@interface UICellConfigurationState (MyCellAdditions)
- (BOOL)isArchived;
- (void)setIsArchived:(BOOL) isArchived;
@end

@implementation UICellConfigurationState (MyCellAdditions)
- (BOOL)isArchived {
    return [[self valueForKey:UICONFIGURATIONSTATECUSTOMKEY_IS_ARCHIVED] boolValue];
}

- (void)setIsArchived:(BOOL) isArchived {
    self[UICONFIGURATIONSTATECUSTOMKEY_IS_ARCHIVED] = @(isArchived);
}
@end

@interface MyCell : UICollectionViewCell
@property (nonatomic) BOOL isArchived;
@end

@implementation MyCell

// This is an existing custom property of the cell.
- (void)setIsArchived:(BOOL)isArchived {
    // Ensure that an update is performed whenever this property changes.
    if (isArchived != _isArchived) {
        _isArchived = isArchived;
        [self setNeedsUpdateConfiguration];
    }
}

- (UICellConfigurationState *)configurationState {
    // Get the structure from UIKit with the system properties set by calling super.
    UICellConfigurationState *state = [super configurationState];
    
    // Set the custom property on the state.
    [state setIsArchived: self.isArchived];
    return state;
}

- (void)updateConfigurationUsingState:(UICellConfigurationState *)state {
    // Get the default background configuration styling for the current state based on the system states.
    UIBackgroundConfiguration *backgroundConfig = [[UIBackgroundConfiguration listPlainCellConfiguration] updatedConfigurationForState:state];
    
    // Customize the background configuration based on the custom state.
    if (state.isArchived) {
        [backgroundConfig setVisualEffect:[UIBlurEffect effectWithStyle:UIBlurEffectStyleSystemMaterial]];
    }
    
    // Apply the background configuration to the cell.
    [self setBackgroundConfiguration:backgroundConfig];
}

@end
```

## See Also

### Configuration states

- [UIViewConfigurationState](uiviewconfigurationstate-c.class.md): A structure that encapsulates a view’s state.
- [UICellConfigurationState](uicellconfigurationstate-c.class.md): An object that encapsulates a cell’s state.
- [UIConfigurationState](uiconfigurationstate-1smq1.md): The requirements for an object that encapsulates a view’s state.
