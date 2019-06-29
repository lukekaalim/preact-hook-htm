import { render, createElement, createContext } from 'preact';
import { useState, useEffect, useReducer, useRef, useContext } from 'preact/hooks';
import htm from 'htm';

const html = htm.bind(createElement);

export {
  createElement,
  html,
  render,
  useState,
  useEffect,
  useReducer,
  useRef,
  createContext,
  useContext,
};
