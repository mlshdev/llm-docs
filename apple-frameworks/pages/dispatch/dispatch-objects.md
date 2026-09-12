> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch-objects](https://developer.apple.com/documentation/dispatch/dispatch-objects)

# Dispatch Objects (Swift)

**Framework:** Dispatch  
**Kind:** API Collection

The basic behaviors supported by all dispatch types.

<a id="overview"></a>

## Overview

There are many types of dispatch objects, including [dispatch_queue_t](dispatch_queue_t.md), [dispatch_group_t](dispatch_group_t.md), and [dispatch_source_t](dispatch_source_t.md). The base dispatch object interfaces allow you to manage memory, pause and resume execution, define object context, log task data, and more.

By default, dispatch objects are declared as Objective-C types when you build them with an Objective-C compiler. This behavior lets you adopt ARC and enable memory leak checks by the static analyzer. It also lets you add your objects to Cocoa collections.

## Topics

### Activating, Suspending, and Resuming the Object

- [activate()](dispatchobject/activate%28%29.md): Activates the dispatch object.
- [suspend()](dispatchobject/suspend%28%29.md): Suspends the invocation of block objects on a dispatch object.
- [resume()](dispatchobject/resume%28%29.md): Resumes the invocation of block objects on a dispatch object.
- [dispatch_object_t](dispatch_object_t.md): A dispatch object.

### Changing the Assigned Target Queue

- [setTarget(queue:)](dispatchobject/settarget%28queue_%29.md): Specifies the dispatch queue on which to perform work associated with the current object.

## See Also

### Dispatch Objects

- [DispatchObject](dispatchobject.md): The base class for most dispatch types.
- [DispatchPredicate](dispatchpredicate.md): Logical conditions to evaluate within a given execution context.
- [dispatchPrecondition(condition:)](dispatchprecondition%28condition_%29.md): Checks a dispatch condition necessary for further execution.

# Dispatch Objects (Objective-C)

**Framework:** Dispatch  
**Kind:** API Collection

The basic behaviors supported by all dispatch types.

<a id="overview"></a>

## Overview

There are many types of dispatch objects, including [dispatch_queue_t](dispatch_queue_t.md), [dispatch_group_t](dispatch_group_t.md), and [dispatch_source_t](dispatch_source_t.md). The base dispatch object interfaces allow you to manage memory, pause and resume execution, define object context, log task data, and more.

By default, dispatch objects are declared as Objective-C types when you build them with an Objective-C compiler. This behavior lets you adopt ARC and enable memory leak checks by the static analyzer. It also lets you add your objects to Cocoa collections.

## Topics

### Activating, Suspending, and Resuming the Object

- [dispatch_activate](dispatchobject/activate%28%29.md): Activates the dispatch object.
- [dispatch_suspend](dispatchobject/suspend%28%29.md): Suspends the invocation of block objects on a dispatch object.
- [dispatch_resume](dispatchobject/resume%28%29.md): Resumes the invocation of block objects on a dispatch object.
- [dispatch_object_t](dispatch_object_t.md): A dispatch object.

### Changing the Assigned Target Queue

- [dispatch_set_target_queue](dispatchobject/settarget%28queue_%29.md): Specifies the dispatch queue on which to perform work associated with the current object.

### Updating Contextual Data

- [dispatch_get_context](dispatch_get_context.md): Returns the application-defined context of an object.
- [dispatch_set_context](dispatch_set_context.md): Associates an application-defined context with the object.

### Managing Memory

- [dispatch_retain](dispatch_retain.md): Increments the reference count (the retain count) of a dispatch object.
- [dispatch_release](dispatch_release.md): Decrements the reference count (the retain count) of a dispatch object.
- [dispatch_set_finalizer_f](dispatch_set_finalizer_f.md): Sets the finalizer function for a dispatch object.

### Introspecting a Dispatch Object

- [dispatch_introspection_hook_queue_create](dispatch_introspection_hook_queue_create.md)
- [dispatch_introspection_hook_queue_destroy](dispatch_introspection_hook_queue_destroy.md)
- [dispatch_introspection_hook_queue_item_enqueue](dispatch_introspection_hook_queue_item_enqueue.md)
- [dispatch_introspection_hook_queue_item_dequeue](dispatch_introspection_hook_queue_item_dequeue.md)
- [dispatch_introspection_hook_queue_callout_begin](dispatch_introspection_hook_queue_callout_begin.md)
- [dispatch_introspection_hook_queue_callout_end](dispatch_introspection_hook_queue_callout_end.md)
- [dispatch_introspection_hook_queue_item_complete](dispatch_introspection_hook_queue_item_complete.md)
