> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext](https://developer.apple.com/documentation/classkit/clscontext)

# CLSContext (Swift)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

An area of your app that represents an assignable task, like a quiz or a chapter.

## Declaration

```swift
class CLSContext
```

## Mentioned In

- [Creating bookmarks and assignments from your app](creating-bookmarks-and-assignments-from-your-app.md)

<a id="overview"></a>

## Overview

Make it easy for teachers to understand the app content a context represents by configuring it with information like a clear, concise title localized for the regions that your app supports.

A context can contain groups of other contexts, like a book that contains chapters or a chapter that contains sections. You can assemble contexts into a hierarchy of up to eight levels that acts as a table of contents for teachers who want to assign your app content. See [Advertising your app’s assignable content](advertising-your-app-s-assignable-content.md) for more details.

## Topics

### Creating contexts

- [init(type:identifier:title:)](clscontext/init%28type_identifier_title_%29.md): Initializes a new context.
- [CLSObject](clsobject.md): The abstract base class for objects managed by ClassKit.

### Identifying the context

- [identifier](clscontext/identifier.md): A string that uniquely identifies a context among its siblings.
- [title](clscontext/title.md): The name of the context as it appears to users.
- [summary](clscontext/summary.md): An optional, user-visible description of the context.
- [thumbnail](clscontext/thumbnail.md): An optional thumbnail image associated with the context.

### Managing the context type

- [type](clscontext/type.md): The kind of content a context represents.
- [setType(\_:)](clscontext/settype%28__%29.md): Updates the kind of content that a context represents.
- [CLSContextType](clscontexttype.md): The kinds of assignable content a context can contain.
- [customTypeName](clscontext/customtypename.md): An optional name that the system presents to the user if you choose the custom context type.

### Characterizing the context

- [suggestedAge](clscontext/suggestedage.md): The range of ages, measured in years, for which you deem a context’s content suitable.
- [suggestedCompletionTime](clscontext/suggestedcompletiontime.md): A suggested time range to complete a task, measured in minutes.
- [isAssignable](clscontext/isassignable.md): A Boolean that indicates whether teachers can assign the context as a task.

### Managing context presentation

- [displayOrder](clscontext/displayorder.md): The position of a context relative to its siblings.
- [topic](clscontext/topic.md): The area of study to which a context relates.
- [CLSContextTopic](clscontexttopic.md): The areas of study to which contexts may relate.

### Indicating progress reporting capabilities

- [progressReportingCapabilities](clscontext/progressreportingcapabilities.md): The kinds of progress reporting that the context can perform.
- [addProgressReportingCapabilities(\_:)](clscontext/addprogressreportingcapabilities%28__%29.md): Adds a progress reporting capability to the set of capabilities for the context.
- [resetProgressReportingCapabilities()](clscontext/resetprogressreportingcapabilities%28%29.md): Resets the set of capabilities for the context.
- [CLSProgressReportingCapability](clsprogressreportingcapability.md): A progress reporting capability supported by a context.

### Activating and deactivating a context

- [Informing ClassKit that a task is about to begin](informing-classkit-that-a-task-is-about-to-begin.md): Activate and deactivate contexts according to user interaction.
- [becomeActive()](clscontext/becomeactive%28%29.md): Tells a context to become the active context.
- [resignActive()](clscontext/resignactive%28%29.md): Tells a context to stop being the active context.
- [isActive](clscontext/isactive.md): A Boolean indicating whether the context is active.

### Creating activities

- [currentActivity](clscontext/currentactivity.md): The activity available for recording progress.
- [createNewActivity()](clscontext/createnewactivity%28%29.md): Creates and returns a new activity instance for the context.

### Managing context hierarchy

- [identifierPath](clscontext/identifierpath.md): The identifier path that locates the context within the data store’s context hierarchy.
- [parent](clscontext/parent.md): The direct ancestor of this context.
- [removeFromParent()](clscontext/removefromparent%28%29.md): Removes the context from its parent.
- [addChildContext(\_:)](clscontext/addchildcontext%28__%29.md): Adds the specifed context as a child of the context receiving the method call.
- [descendant(matchingIdentifierPath:completion:)](clscontext/descendant%28matchingidentifierpath_completion_%29.md): Finds the context with the given identifier path relative to this context.

### Creating a context presentation hierarchy

- [navigationChildContexts](clscontext/navigationchildcontexts.md): The child contexts that a user can navigate to from this context in the Schoolwork app.
- [addNavigationChildContext(\_:)](clscontext/addnavigationchildcontext%28__%29.md): Adds a child context that users can navigate to from this context.
- [removeNavigationChildContext(\_:)](clscontext/removenavigationchildcontext%28__%29.md): Removes the specified context as a presentable child of this context.

### Configuring deep links

- [Linking directly to assignments](linking-directly-to-assignments.md): Make it easy for teachers to guide students to specific content.
- [universalLinkURL](clscontext/universallinkurl.md): A URL that leads to the content in your app associated with the current context.
- [isClassKitDeepLink](../foundation/nsuseractivity/isclasskitdeeplink.md): A Boolean value that indicates whether a user activity represents a ClassKit context.
- [contextIdentifierPath](../foundation/nsuseractivity/contextidentifierpath.md): The identifier path associated with a user activity generated by an app that adopts ClassKit.

## Relationships

### Inherits From

- [CLSObject](clsobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Contexts

- [Advertising your app’s assignable content](advertising-your-app-s-assignable-content.md): Assemble a hierarchy of contexts and declare your app’s assignable content.
- [CLSContextProvider](clscontextprovider.md): An interface used to tell your ClassKit context provider app extension to update contexts.

# CLSContext (Objective-C)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An area of your app that represents an assignable task, like a quiz or a chapter.

## Declaration

```objectivec
@interface CLSContext : CLSObject
```

## Mentioned In

- [Creating bookmarks and assignments from your app](creating-bookmarks-and-assignments-from-your-app.md)

<a id="overview"></a>

## Overview

Make it easy for teachers to understand the app content a context represents by configuring it with information like a clear, concise title localized for the regions that your app supports.

A context can contain groups of other contexts, like a book that contains chapters or a chapter that contains sections. You can assemble contexts into a hierarchy of up to eight levels that acts as a table of contents for teachers who want to assign your app content. See [Advertising your app’s assignable content](advertising-your-app-s-assignable-content.md) for more details.

## Topics

### Creating contexts

- [initWithType:identifier:title:](clscontext/init%28type_identifier_title_%29.md): Initializes a new context.
- [CLSObject](clsobject.md): The abstract base class for objects managed by ClassKit.

### Identifying the context

- [identifier](clscontext/identifier.md): A string that uniquely identifies a context among its siblings.
- [title](clscontext/title.md): The name of the context as it appears to users.
- [summary](clscontext/summary.md): An optional, user-visible description of the context.
- [thumbnail](clscontext/thumbnail.md): An optional thumbnail image associated with the context.

### Managing the context type

- [type](clscontext/type.md): The kind of content a context represents.
- [setType:](clscontext/settype%28__%29.md): Updates the kind of content that a context represents.
- [CLSContextType](clscontexttype.md): The kinds of assignable content a context can contain.
- [customTypeName](clscontext/customtypename.md): An optional name that the system presents to the user if you choose the custom context type.

### Characterizing the context

- [suggestedAge](clscontext/suggestedage.md): The range of ages, measured in years, for which you deem a context’s content suitable.
- [suggestedCompletionTime](clscontext/suggestedcompletiontime.md): A suggested time range to complete a task, measured in minutes.
- [assignable](clscontext/isassignable.md): A Boolean that indicates whether teachers can assign the context as a task.

### Managing context presentation

- [displayOrder](clscontext/displayorder.md): The position of a context relative to its siblings.
- [topic](clscontext/topic.md): The area of study to which a context relates.
- [CLSContextTopic](clscontexttopic.md): The areas of study to which contexts may relate.

### Indicating progress reporting capabilities

- [progressReportingCapabilities](clscontext/progressreportingcapabilities.md): The kinds of progress reporting that the context can perform.
- [addProgressReportingCapabilities:](clscontext/addprogressreportingcapabilities%28__%29.md): Adds a progress reporting capability to the set of capabilities for the context.
- [resetProgressReportingCapabilities](clscontext/resetprogressreportingcapabilities%28%29.md): Resets the set of capabilities for the context.
- [CLSProgressReportingCapability](clsprogressreportingcapability.md): A progress reporting capability supported by a context.

### Activating and deactivating a context

- [Informing ClassKit that a task is about to begin](informing-classkit-that-a-task-is-about-to-begin.md): Activate and deactivate contexts according to user interaction.
- [becomeActive](clscontext/becomeactive%28%29.md): Tells a context to become the active context.
- [resignActive](clscontext/resignactive%28%29.md): Tells a context to stop being the active context.
- [active](clscontext/isactive.md): A Boolean indicating whether the context is active.

### Creating activities

- [currentActivity](clscontext/currentactivity.md): The activity available for recording progress.
- [createNewActivity](clscontext/createnewactivity%28%29.md): Creates and returns a new activity instance for the context.

### Managing context hierarchy

- [identifierPath](clscontext/identifierpath.md): The identifier path that locates the context within the data store’s context hierarchy.
- [parent](clscontext/parent.md): The direct ancestor of this context.
- [removeFromParent](clscontext/removefromparent%28%29.md): Removes the context from its parent.
- [addChildContext:](clscontext/addchildcontext%28__%29.md): Adds the specifed context as a child of the context receiving the method call.
- [descendantMatchingIdentifierPath:completion:](clscontext/descendant%28matchingidentifierpath_completion_%29.md): Finds the context with the given identifier path relative to this context.

### Creating a context presentation hierarchy

- [navigationChildContexts](clscontext/navigationchildcontexts.md): The child contexts that a user can navigate to from this context in the Schoolwork app.
- [addNavigationChildContext:](clscontext/addnavigationchildcontext%28__%29.md): Adds a child context that users can navigate to from this context.
- [removeNavigationChildContext:](clscontext/removenavigationchildcontext%28__%29.md): Removes the specified context as a presentable child of this context.

### Configuring deep links

- [Linking directly to assignments](linking-directly-to-assignments.md): Make it easy for teachers to guide students to specific content.
- [universalLinkURL](clscontext/universallinkurl.md): A URL that leads to the content in your app associated with the current context.
- [isClassKitDeepLink](../foundation/nsuseractivity/isclasskitdeeplink.md): A Boolean value that indicates whether a user activity represents a ClassKit context.
- [contextIdentifierPath](../foundation/nsuseractivity/contextidentifierpath.md): The identifier path associated with a user activity generated by an app that adopts ClassKit.

## Relationships

### Inherits From

- [CLSObject](clsobject.md)

## See Also

### Contexts

- [Advertising your app’s assignable content](advertising-your-app-s-assignable-content.md): Assemble a hierarchy of contexts and declare your app’s assignable content.
- [CLSContextProvider](clscontextprovider.md): An interface used to tell your ClassKit context provider app extension to update contexts.
